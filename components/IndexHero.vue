<template>
  <div class="home">
    <div class="background" style="background: url(https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1612189163/cbtwines/home_BG_r8eerr.png) top left / cover fixed;">
      <div class="content">
        <img :src="$cloudinary.image.url('v1612189161/cbtwines/company_label_laipot.png', { fetch_format: 'auto', quality: 'auto', width: 400 })" alt="Images">
        <div class="quote">
          <p class="quote-text">
            “Where there is no wine, <br>there is no love”
          </p>
          <p class="quote-by">
            - Euripides
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexHero'
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  min-height: 100%;
  position: relative;
  .background{
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
  }
  .content {
    margin: 140px 40px;
    @media (max-width: 490px) {
      margin: 70px 0 0;
      padding: 5%;
    }
    img {
      width: 400px;
      @media (max-width: 490px) {
        width: 80%;
        margin: 5% 10% 0;
      }
    }
    .quote {
      justify-content: left;
      @media (min-width: 491px) {
        max-width: 350px;
      }
      &-text {
        margin-top: 15px;
        opacity: .7;
        padding-left: 40px;
        font: italic normal normal 31px/37px Athelas;
        text-align: right;
        color: #FFFFFF;
        display: flex;
        @media (max-width: 1090px) {
          opacity: 1;
          text-align: center;
        }
        @media (max-width: 490px) {
          font: italic normal normal 22px/37px Athelas;
          padding-left: 0;
          margin-left: auto;
          margin-right: auto;
          width: 371px;
          max-width: 100%;
          br {
            display: none;
          }
        }
        @media (max-width: 376px) {
          font: italic normal normal 20px/37px Athelas;
        }
        @media (max-width: 320px) {
          font: italic normal normal 17px/37px Athelas;
        }
      }
      &-by {
        opacity: 0.7;
        padding-right: 5px;
        font: italic normal normal 21px/36px Athelas;
        text-align: right;
        color: #FFFFFF;
        @media (max-width: 1090px) {
          opacity: 1;
          text-align: center;
          padding-right: 0px;
        }
      }
    }
  }
}
</style>
