<template>
  <div ref="footer" class="footer">
    <p class="footer-content">
      <span>{{ $t('footer.text') }}</span>
    </p>
  </div>
</template>

<script>
export default {
  mounted () {
    this.width = window.innerWidth
    window.addEventListener('resize', this.onResize)
    setTimeout(() => {
      this.$refs.footer.style.height = '0px'
    }, 5000)
  }
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  height: 50px;
  background-color: #413C3C;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  @media (max-width: 375px) {
    height: 70px;
  }
  z-index: 50;
  .footer-content {
    color: #FFFFFF;
    margin: 0;
    text-align: center;
    width: 100%;
    padding: 0 4.5%;
    font-size: 15px;
    @media (max-width: 1330px) {
      font-size: 13px;
    }
  }
}
</style>
