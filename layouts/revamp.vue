<template>
  <main :class="$i18n.locale">
    <Header/>
    <section id="wrapper" :class="(showMobileMenu) ? 'open' : ''">
      <nuxt-child />
    </section>
    <div class="mobile-menu" :class="(showMobileMenu) ? 'open' : ''">
      <v-list>
        <v-list-item v-for="(item, index) in $t('header.mobileMenu')" :key="index" @click="toggleMobileMenu" >
          <nuxt-link :to="item.link">
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </div>
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
      fab: false
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
    },
    toggleMobileMenu() {
      this.$store.commit('SET_SHOWMOBILEMENU', !this.showMobileMenu)
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
  computed: {
    showMobileMenu() {
      return this.$store.getters.showMobileMenu
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
    },
    showMobileMenu () {
      const menu = document.querySelector(".mobile-menu")
      const wrapper = document.querySelector("#wrapper")
      if(this.showMobileMenu) {
        menu.style.opacity = "0.0"
        menu.style.display = "block"
        menu.style.visibility = "hidden"
        setTimeout(() => {menu.classList.add('open') }, 1)
        setTimeout(() => {
          menu.style.opacity = "1.0"
        }, 301)
        setTimeout(() => {
          menu.style.visibility = "visible"
        }, 301)
      }
      else {
        menu.classList.remove('open')
        menu.style.display = "none"
      }
    }
   }
}
</script>

<style lang="scss">
html {
  overflow: hidden;
}
#wrapper {
  max-height: calc(100vh - 120px);
  overflow-x: auto;
  transition: 0.6s;
  @media (max-width: 375px) {
    max-height: 82.2vh;
  }
  @media (max-width: 320px) {
    max-height: 76.2vh;
  }
}
#wrapper.open {
  transform: translate(-768px, 0px);
  opacity: 0.0;
}
.mobile-menu {
  width: 100%;
  height: 83.2vh;
  transform: translate(768px, 0px);
  opacity: 0.0;
  transition: 0.6s;
  position: absolute;
  top: 70px;
  display: none;
  .v-list {
    height: 80%;
    text-align: center;
    &-item {
      height: 12.5%;
      a {
        width: 100%;
        text-decoration: none;
        color: #000000;
        height: 100%;
        padding: 20px 0;
      }
      a.nuxt-link-exact-active{
        color: #bd5558;
      }
    }
  }
}
.mobile-menu.open {
  transform: translate(0px, 0px);
  opacity: 1.0;
}
html, body {
  height: 100%;
  width: 100%;
}
</style>
