<template>
  <div class="header">
    <div class="header-container">
      <div class="logo-container">
        <img src="/media/logo.png" alt="logo"/>
      </div>
      <div class="navlist">
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#news">ABOUT US</a></li>
          <li><a href="#contact">WINE LIST</a></li>
          <li><a href="#about">NEW ARRIVAL</a></li>
          <li><a href="#about">SPECIAL OFFER</a></li>
          <li><a href="#about">CONTACT US</a></li>
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
          li {
            float: left;
            a {
              display: block;
              color: #2b2b2b;
              text-align: center;
              padding: 25px 26px;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
</style>