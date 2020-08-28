<template>
  <main :class="$i18n.locale">
    <Header :show-mobile-menu="showMobileMenu" @passShowMobileMenu="showMobileMenu = $event"/>
    <section id="wrapper" :class="(showMobileMenu) ? 'open' : ''">
      <nuxt-child />
    </section>
    <Footer/>
  </main>

</template>

<script>
import axios from 'axios';
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      loggedIn: false,
      fab: false,
      showMobileMenu: false
    }
  },
  methods: {
    changeLang(lang) {
      if (lang === 'traditionalChinese') {
        this.$router.push('/hk')
      }
      else if (lang === 'simplifiedChinese') {
        this.$router.push('/cn')
      }
      else {
        this.$router.push('/')
      }
    },
    logout() {
      localStorage.clear();
      this.loggedIn = false;
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  mounted() {
    if(localStorage.getItem('token')) {
      axios.get('/api/backstage/auth-with-jwt', {headers: {token: localStorage.getItem('token')}})
          .then(res => {
              console.log(res);
              if(res.status === 200) {
                this.loggedIn = true;
              }
          })
    }
  },
  watch: {
    $route () {
      this.loggedIn = false;
      if (localStorage.getItem('token')) {
        axios.get('/api/auth-with-jwt', {headers: {token: localStorage.getItem('token')}})
          .then(
            res => {
              console.log(res);
              if(res.status === 200) {
                this.loggedIn = true;
              }
            },
            err => {
              console.log(err);
            }
          )
      }
    }
  }
}
</script>

<style lang="scss">
#wrapper {
  transition: 0.5s;
}
#wrapper.open {
  transform: translate(-382px, 0px);
  opacity: 0.0;
}
</style>
