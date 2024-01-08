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
          td.offical
            .offical-url {{ work.officalUrl }}
            img(src="~/assets/images/link-icon.png").link-icon(@click="transitionToLink")
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

const backgroundImage = '~/assets/images/' + work?.thumbnailImage

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
      background-color: $image-background-color;
      border: 10px solid $sub-color;
      border-radius: 50px;
    }

    .info{
      width: 45%;
      margin: 8rem auto 0;
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
        }
        td{
          width: 70%;
          color: $sub-color;
          margin: auto;
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
