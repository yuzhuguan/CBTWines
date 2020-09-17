<template>
  <div class="find-us">
    <div class="find-us-container">
      <div class="find-us-hero">
        <div class="image-container" :style="{ backgroundImage: 'url(/media/find-us.png)'}">
            <h1>FIND US</h1>
        </div>
        <div class="content">
          <img src="/media/logo.png" alt="Logo"/>
        </div>
        <div class="right-banner">
        </div>
      </div>
      <div class="map-container">
        <div class="left-banner">

        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d922.6139242470448!2d114.148351!3d22.336416000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040754eca8813f%3A0x4f9fe56467eaabd4!2z5piM6ZqG5bel5qWt5aSn5buI!5e0!3m2!1szh-TW!2shk!4v1585061879759!5m2!1szh-TW!2shk"
          width="100%"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'revamp'
}
</script>

<style lang="scss">
.find-us {
  height: calc(100vh - 120px);
  min-height: calc(100vh - 120px);
  .find-us-container {
    height: 100%;
    .find-us-hero {
      height: 84%;
      flex-direction: column;
      flex-direction: row;
      display: flex;
      .image-container {
        height: 100%;
        flex-basis: 49.5%;
        background-position: center;
        background-size: cover;
        position: relative;
        h1 {
          position: absolute;
          bottom: 20px;
          left: 20px;
          font-size: 4rem;
          font-weight: 400;
          color: white;
          letter-spacing: 8px;
        }
      }
      .content {
        flex-basis: 40.5%;
        img {
          width: 300px;
        }
      }
      .right-banner {
        flex-basis: 10%;
        background: #e6cfcf;
      }
    }
  }
}
</style>
