<template>
  <v-list v-show="showList" class="hover-list" @mouseover="showList = true" @mouseout="showList = false">
    <v-list-item class="line" />
    <span v-for="(item, index) in items" :key="index">
      <v-list-item class="hover-list-item">
        <v-list-item-title>
          <a v-if="type === 'lang-switcher'" :href="langPath(item.link) ">{{ item.title }}</a>
          <nuxt-link v-else :to="item.link">{{ item.title }}</nuxt-link>
        </v-list-item-title>
      </v-list-item>
      <v-list-item class="line" />
    </span>
  </v-list>
</template>

<script>
export default {
  name: 'NavHoverList',
  props: {
    items: {
      default: Array,
      type: Array
    },
    showList: {
      default: Boolean,
      type: Boolean
    },
    type: {
      default: 'default',
      type: String
    }
  },
  methods: {
    langPath (link) {
      if (this.$i18n.locale === 'en') {
        return link + this.$route.path
      }
      if (link === '/en') {
        return this.$route.path.split(`/${this.$i18n.locale}`)[1]
      }
      return link + this.$route.path.split(`/${this.$i18n.locale}`)[1]
    }
  }
}
</script>

<style lang="scss" scoped>
.hover-list {
  text-align: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 68px;
  padding: 0;

  .line {
    width: 44px;
    height: 1px;
    background: #ebc7d9;
    min-height: 1px;
    margin: 0 auto 0;
    transition: 0.8s;
  }

  &-item {
    min-height: 45px;
    transition: 0.8s;
    padding: 0;
    &:hover {
      cursor: pointer;
      background: #ebc7d9;

      & .v-list-item__title {
        a {
          color: white!important;
        }
      }

      & + .line {
        width: 100%;
      }
    }
  }
}
</style>
