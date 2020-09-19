<template>
  <div class="contact-us">
    <h1 :style="{backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theiwsr.com%2Fnews-and-comment-global-still-wine-trends-to-watch%2F&psig=AOvVaw3uxIXEnBKFy5MIrGwmupoP&ust=1600625694958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjl5MHp9esCFQAAAAAdAAAAABAE) 50% 50%'}">
      CONTACT US
    </h1>
    <canvas class="background"></canvas>
  </div>
</template>

<script>
import Particles from 'particlesjs'
export default {
  layout: 'revamp',
  mounted() {
    window.onload = () => {
      Particles.init({
        selector: '.background',
        maxParticles: 150,
        sizeVariations: 3,
        color: '#dadada',
        connectParticles: true,
      });
    }
  }
}
</script>

<style lang="scss">
  .contact-us {
    height: calc(100vh - 120px);
    min-height: calc(100vh - 120px);
    position: relative;
    font-family: "Monstserrat", snas-serif;
    .background {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      z-index: 0;
    }
    h1 {
      color: #000000;
      width: 1000px;
      text-align: center;
      font-size: 80px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 20px;
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
      background-size: cover;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text !important;
      z-index: 10;
      background: url('/media/contact-us.jpg') 100% 50%;
    }
  }
</style>
