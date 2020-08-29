<template>
  <div class="about-us">
    <div class="main-container">
      <div class="left-block">
        <div class="top-block"/>
        <div class="block" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" data-aos-anchor=".right-block">
          <div class="title-block" >
            <h1 data-aos="zoom-out" data-aos-delay="1050" data-aos-duration="1000" data-aos-once="true" data-aos-anchor=".right-block">{{ $t('about-us.title') }}</h1>
          </div>
          <div class="content" data-aos="fade-up" data-aos-delay="1250" data-aos-duration="1000" data-aos-once="true" data-aos-anchor=".right-block">
            <p v-html="$t('about-us.paragraph1')"/>
            <p>{{$t('about-us.paragraph2')}}<nuxt-link to="/">
              {{ $t('about-us.link') }}
            </nuxt-link></p>
          </div>
        </div>
        <div class="bottom-block"/>
      </div>
      <div class="right-block">
        <img src="/media/about-us.png" alt="image" data-aos="fade-left" data-aos-delay="" data-aos-duration="2400">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'revamp',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  computed: {
  }
}
</script>

<style lang="scss">
.about-us {
  width: 100%;
  min-height: calc(100vh - 120px);
  @media (max-width: 1000px) {
    height: auto;
  }
  .main-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px) {
      flex-direction: column-reverse;
    }
    .left-block {
      height: 100%;
      flex-basis: 50%;
      background: #fafafa;
      @media (max-width: 1000px) {
        padding: 0px 70px;
      }
      @media (max-width: 550px) {
        padding: 0px 50px;
      }
      @media (max-width: 375px) {
        padding: 0px 25px;
      }
      .top-block {
        width: 100%;
        height: 120px;
        background: #fafafa;
        @media (max-width: 1000px) {
          height: 101px;
        }
        @media (max-width: 550px) {
          height: 45px;
        }
        @media (max-width: 375px) {
          height: 35px;
        }
      }
      .block {
        width: 100%;
        height: 400px;
        background: #f4f0ef;
        padding-top: 1px;
        @media (max-width: 1000px) {
          height: 505px;
        }
        @media (max-width: 550px) {
          height: 380px;
        }
        .title-block {
          text-align: center;
          h1 {
            font-size: 70px;
            font-weight: 300;
            margin-top: -43px;
            text-shadow: -3px 0px 8px #bbbbbb;
            @media (max-width: 550px) {
              font-size: 40px;
              margin-top: -25px;
            }
          }
        }
        .content {
          width: 385px;
          margin-left: auto;
          margin-right: auto;
          padding-top: 1%;
          text-align: center;
          @media (max-width: 700px) {
            width: 350px;
          }
          @media (max-width: 550px) {
            width: 273px;
          }
          @media (max-width: 375px) {
            width: 222px;
          }
          p{
            font-family: 'Raleway', sans-serif;
            font-size: 17px;
            line-height: 1.8rem;
            &:first-child {
              margin-bottom: 10px;
            }
            @media (max-width: 1000px) {
              line-height: 2.35rem;
            }
            @media (max-width: 700px) {
              font-size: 15px;
            }
            @media (max-width: 550px) {
              font-size: 12px;
              line-height: 1.8rem;
            }
            @media (max-width: 375px) {
              font-size: 10px;
            }
            @media (max-width: 360px) {
              line-height: 1.4rem;
            }
          }
          a {
            color: #A44C4F;
            line-height: 1.8rem;
            text-decoration: none;
            font-size: 17px;
            @media (max-width: 1000px) {
              line-height: 2.35rem;
            }
            @media (max-width: 550px) {
              font-size: 12px;
              line-height: 1.8rem;
            }
            @media (max-width: 375px) {
              font-size: 10px;
            }
            @media (max-width: 360px) {
              line-height: 1.4rem;
            }
          }
        }
      }
      .bottom-block {
        display: none;
        @media (max-width: 1000px) {
          background: #fafafa;
          height: 75px;
          display: block;
        }
        @media (max-width: 550px) {
          height: 40px;
        }
        @media (max-width: 375px) {
          height: 20px;
        }
      }
    }
    .right-block{
      height: 100%;
      flex-basis: 50%;
      @media (max-width: 1000px) {
        height: 520px;
      }
      @media (max-width: 700px) {
        height: 400px;
      }
      @media (max-width: 375px) {
        height: 210px;
      }
      img {
        object-position: 0% 0;
        object-fit: cover;
        height: 100%;
        width: 100%;
        @media (max-width: 1000px) {
          object-position: 0% 22%;
        }
        @media (max-width: 550px) {
          height: 27vh;
        }
        @media (max-width: 320px) {
          height: 100%;
        }
      }
    }
  }
}
</style>
