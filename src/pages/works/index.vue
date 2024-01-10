<template lang="pug">
//- PageTransition
PageTransition(title="WORKS")
//- FirstView
FirstView(word="MY WORKS.")

.works.bc-alphapipe-bold

  .disclosed
    .heading
      span DISCLOSED / 
      span.vdl-v7marugothic.heading-jp 公開案件
    WorksCardList(:works="discloseds")

  .Independent
    .heading
      span INDEPENDENT / 
      span.vdl-v7marugothic.heading-jp 自主制作
    WorksCardList(:works="independents")

  .undisclosed
    .heading
      span UNDISCLOSED / 
      span.vdl-v7marugothic.heading-jp 非公開案件
    .undisclosed-content
      p.undisclosed-project(v-for="project, index in undisclosed" :key="index") {{ project }}
      .and-more
        p And more.

</template>

<script lang="ts" setup>
// Get works contents from json.
import allWorksData from '@/assets/json/works.json'
const filteringWorksByType = (data: Works, type: string) => {
  return data.works.filter(
    (work: Work) => work.type === type
  )
}

const discloseds = filteringWorksByType(allWorksData, 'disclosed')
const independents = filteringWorksByType(allWorksData, 'independent')
const undisclosed: string[] = [
  '大学向け広報支援システム',
  '大学向け学生管理支援システム',
  '大学向け学生就職支援システム',
  '官公庁向け空き家管理システム',
  '社労士向け顧客情報管理システム',
  'テレビ会社社内システム',
  '社内研修講師',
];

// emits.
// const emit = defineEmits(['setImageOnLayout'])
// const setImageOnLayout = (value :object) => {
//   emit('setImageOnLayout', value)
// }
</script>

<style lang="scss" scoped>
.works{
  margin: 20rem auto 0;
  text-align: center;
  .heading{
    width: 50rem;
    height: 4rem;
    margin: 20rem auto 5rem;
    padding: 0.5rem;
    background-color: $sub-color;
    color: $main-color;
    font-size: 2rem;
    border-radius: 25px;
    @media screen and (max-width: 430px){
      padding: 0.7rem;
      font-size: 1.5rem;
      width: 90%;
      height: 3.5rem;
    }
    .heading-jp{
      height: 100%;
      font-size:1.8rem;
      position: relative;
      bottom: 1px;
      @media screen and (max-width: 430px){
        font-size: 1.5rem;
      }
    }
  }
  .undisclosed{
    margin-bottom: 10rem;
    .undisclosed-content{
      text-align: start;
      margin: 0 auto 1rem;
      width: fit-content;
      font-size: 1.3rem;
      @media screen and (max-width: 430px){
        font-size: 1rem;
        width:85%;
      }
      .undisclosed-project{
        text-align: center;
        border-radius: 25px;
        margin: 2rem auto 2rem;
        padding: 1rem 3rem;
        border: 3px solid $sub-color;
      }
      .and-more{
        margin-top: 3rem;
        text-align: center;
        font-size: 2rem;
      }
    }
  }

}

</style>
