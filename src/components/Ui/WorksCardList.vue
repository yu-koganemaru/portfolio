<template lang="pug">
.work-cards
  .work-card( v-for="work in works" :key="work.id" )
    WorksCard(:work="work")
    .roles
      .role( v-for="role in work.roles" :key="role.index" ) {{ role }}
</template>

<script lang="ts" setup>
const props = defineProps<{ works: Works }>()
const works :Works = props.works
</script>

<style lang="scss" scoped>
.work-cards{
  margin-top: 7rem;

  .work-card{
    width: 40%;
    height: 100%;
    margin: 0 auto 10rem;
    @media screen and (max-width: 1280px){
      width: 75%;
    }
    @media screen and (max-width: 960px){
      width: 80%;
    }
    @media screen and (max-width: 430px){
      width: 90%;
    }

    .roles{
      display: flex;
      width:fit-content;
      margin: 2.5rem auto 1rem;
      @media screen and (max-width: 430px){
        font-size: 1rem;
        display: block;
      }

      .role{
        background-color: $main-color;
        color: $sub-color;
        padding: 0.5rem 1rem;
        margin: 0.5rem 1rem 1rem;
        border-radius: 10px;
        border: 3px solid $sub-color;
      }
    }
  }
}
</style>
