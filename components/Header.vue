<template>
  <div class="header">
    <div class="header-container">
      <div class="logo-container">
        <nuxt-link to="/">
          <img src="/media/logo.png" alt="logo"/>
        </nuxt-link>
      </div>
      <div class="navlist">
        <ul>
          <li :class="($route.path === '/' || $route.path === '/hk' ||$route.path === '/') ? 'current-page' : ''">
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li :class="($route.path.match(/\babout-us\b/)) ? 'current-page' : ''">
            <nuxt-link to="/about-us">ABOUT US</nuxt-link>
          </li>
          <li :class="($route.path.match(/\bwine-list\b/)) ? 'current-page' : ''">
            <nuxt-link to="/wine-list">WINE LIST</nuxt-link>
          </li>
          <li :class="($route.path.match(/\bnew-arrivals\b/)) ? 'current-page' : ''">
            <nuxt-link to="/new-arrivals">NEW ARRIVAL</nuxt-link>
          </li>
          <li :class="($route.path.match(/\bspecial-offers\b/)) ? 'current-page' : ''">
            <nuxt-link to="/special-offers">SPECIAL OFFER</nuxt-link>
          </li>
          <li :class="($route.path.match(/\bcontact-us\b/)) ? 'current-page' : ''">
            <nuxt-link to="/contact-us">CONTACT US</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .header {
    width: 100%;
    height: 70px;
    background-color: white;
    
    .header-container {
      width: 100%;
      height: 100%;
      .logo-container {
        float: left;
        height: 100%;
        width: auto;
        margin-left: 30px;
        img {
          height: 100%;
          padding-bottom: 6px
        }
      }
      .navlist {
        float: right;
        height: 100%;
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0 10px 0 0;
          overflow: hidden;
          height: 100%;
          .current-page {
            a{
               color: #909090 !important;
            }
          }
          li {
            float: left;
            a {
              display: block;
              color: #2b2b2b;
              text-align: center;
              padding: 25px 37px;
              text-decoration: none;
              @media (max-width: 1180px) {
                padding: 25px 18px;
              }
              @media (max-width: 960px) {
                padding: 28px 16px;
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
</style>