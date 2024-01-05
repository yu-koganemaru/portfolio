<template lang="pug">
//- PageTransition
PageTransition(title="WORKS")
//- FirstView
FirstView(word="MY WORKS.")

.works.bc-alphapipe-bold
  
  .disclosed
    .heading DISCLOSED
    WorksCardList(:works="discloseds")

  .Independent
    .heading INDEPENDENT
    WorksCardList(:works="independents")

  .undisclosed
    .heading UNDISCLOSED
    .undisclosed-content
      p ・大学向け学生管理支援システム
      p ・官公庁向け空き家管理システム
      p ・社労士向け顧客情報管理システム
    p and more.

</template>

<script lang="ts" setup>
// Get works contents from json.
import allWorksData from '@/assets/json/works.json'
const filteringWorksByType = (data: Works, type: string)=>{
  return data.works.filter(
    (work: Work) => work.type === type
  );
};

const discloseds = filteringWorksByType(allWorksData,'disclosed');
const independents = filteringWorksByType(allWorksData,'independent');

// emits.
// const emit = defineEmits(["setImageOnLayout"]);
// const setImageOnLayout = (value :object) => {
//   emit('setImageOnLayout', value)
// }
</script>

<style lang="scss" scoped>
.works{
  margin: 10rem auto 0;
  text-align: center;
  .heading{
    background-color: #fff;
    color: #b8d200;
    width: 50rem;
    padding: 0.5rem;
    font-size: 2rem;
    margin: 20rem auto 5rem;
    border-radius: 25px;
  }
  .site-name{
    margin-top: 2rem;
    font-size: 2rem;
    text-shadow: none;
    color: #fff;
  }
  .undisclosed{
    margin-bottom: 10rem;
    .undisclosed-content{
      text-align: start;
      margin: 0 auto 1rem;
      width: fit-content;
      font-size: 1.5rem;
    }
  }

}

</style>
