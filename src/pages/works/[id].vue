<template lang="pug">
//- PageTransition
PageTransition(:title="work?.title")

.work-detail.bc-alphapipe-bold

  .content
    img(:src="image").img

    .info
      table
        tr(v-if="work.client")
          th CLIENT
          td {{ work.client }}
        tr
          th NAME
          td {{ work.siteName }}
        tr
          th OVERVIEW
          td {{ work.overview }}
        tr(v-if="work.officalUrl")
          th OFFICAL
          td.offical
            .offical-url {{ work.officalUrl }}
            img(src="~/assets/images/link-icon.png").link-icon(@click="transitionToLink")
        tr
          th DEV OUTLINE
          td {{ work.devOutline }}

    BoxHeading(title="COMMENT").box-heading
    .comment
      p(v-for="para in work.comment" :key="para.index") {{ para }}
    
    .back.automate
      img(src="~/assets/images/back.png").icon
      NuxtLink(to="/works") Back

</template>

<script setup lang="ts">
import type { Work } from '~/types/work'
import worksData from '@/assets/json/works.json'
const { params } = useRoute()
const work = worksData.works.find((work: Work) => work.id === params.id)

const image  = '/portfolio/_nuxt/' + work?.thumbnailImage;

const transitionToLink = () => {
  const url = work?.officalUrl
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
.work-detail{
  margin-top: 5rem;
  .content{
    text-align: center;
    font-family: "source-han-sans-japanese";
    font-weight: 500;

    .img{
      width: 60%;
      margin: auto;
      background-color: $image-background-color;
      border: 10px solid $sub-color;
      border-radius: 50px;
      @media screen and (max-width: 1280px){
        width: 80%;
      }
      @media screen and (max-width: 960px){
        width: 90%;
      }
      @media screen and (max-width: 430px){
        width: 100%;
        border-radius: 25px;
      }
    }

    .info{
      width: 45%;
      margin: 8rem auto 0;
      @media screen and (max-width: 1280px){
        width: 60%;
      }
      @media screen and (max-width: 960px){
        width: 70%;
      }
      @media screen and (max-width: 430px){
        width: 95%;
        font-size: 0.8rem;
      }
      .offical{
        display: flex;
        position: relative;
        width: 100%;
      }
      .offical-url{
        width: 100%;
        text-align: match-parent;
      }
      .link-icon{
        left: 100%;
        position: absolute;
        width: 2rem;
        height: 2rem;
        @media screen and (max-width: 430px){
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      table{
        width: 100%;
        border-collapse: collapse;
        color: $main-color;

        th,td{
          height: 3rem;
          border: 10px solid $main-color;
        }
        th{
          font-weight: 600;
          width: 30%;
          background-color: $sub-color;
          @media screen and (max-width: 960px){
            width: 40%;
          }
        }
        td{
          width: 70%;
          color: $sub-color;
          margin: auto;
          @media screen and (max-width: 960px){
            width: 60%;
          }
        }
      }
    }
    .box-heading{
      width: 60%;
      @media screen and (max-width: 960px){
        width: 80%;
      }
      @media screen and (max-width: 430px){
        width: 95%;
      }
    }
    .comment{
      width: 55%;
      margin: 1rem auto 0;
      text-align: start;
      @media screen and (max-width: 960px){
        width: 75%;
      }
      @media screen and (max-width: 430px){
        width: 90%;
      }
    }
    .back{
      width: fit-content;
      display: flex;
      margin: 15rem auto 5rem;
      padding-right: 4rem;
      font-size: 1.7rem;
      .icon{
        position: relative;
        bottom: 7px;
        left: 10px;
        height: 3.4rem;
        width: 4rem;
      }
    }
  }

}
</style>
