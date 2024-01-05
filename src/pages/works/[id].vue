<template lang="pug">
//- PageTransition
PageTransition(:title="work?.title")

.work-detail.bc-alphapipe-bold
  NuxtLink(to="/works") Back
  
  .content
    
    img(:src="backgroundImage").img
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
          td {{ work.officalUrl }}
        tr
          th DEV OUTLINE
          td {{ work.devOutline }}
    
    BoxHeading(title="COMMENT").box-heading
    .comment
      p(v-for="para in work.comment" :key="para.index") {{ para }}

</template>

<script setup lang="ts">
import type { Work } from '~/types/work'
import worksData from '@/assets/json/works.json'
const { params } = useRoute()
const work = worksData.works.find((work: Work) => work.id === params.id)

const backgroundImage = '/_nuxt/assets/images/' + work?.thumbnailImage

const transitionToLink = () => {
      const url = work?.officalUrl
      window.open(url, '_blank')
    }
</script>

<style lang="scss" scoped>
.work-detail{
  .content{
    text-align: center;
    font-family: "source-han-sans-japanese";
    font-weight: 500;

    .img{
      width: 60%;
      margin: auto;
      background-color: #a2d7dd;
      border: 10px solid #fff;
      border-radius: 50px;
    }
    
    .info{
      width: 45%;
      margin: 8rem auto 0;
      table{
        width: 100%;
        height: 16rem;
        border-collapse: collapse;
        color: #b8d200;

        th,td{
          border: 10px solid #b8d200;
        }
        th{
          font-weight: 600;
          width: 30%;
          background-color: #38b48b;
          background-color: #fff;
        }
        td{
          width: 70%;
          color: #fff;
        }
      }
    }
    .box-heading{
      width: 60%;
    }
    .comment{
      width: 55%;
      margin: 1rem auto 20%;
      text-align: start;
    }
  }
  
}
</style>