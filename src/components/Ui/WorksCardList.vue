<template lang="pug">
.work-cards
  .work-card( v-for="work in works" :key="work.id" )
    WorksCard(:work="work").card
    .roles
      .role( v-for="role in work.roles" :key="role.index" ) {{ role }}
</template>

<script lang="ts" setup>
const props = defineProps(['works'])
const works :Work = props.works
</script>

<style lang="scss" scoped>
.work-cards{
  margin-top: 7rem;

  .work-card{
    width: 40%;
    height: 100%;
    margin: 0 auto 10rem;

    .roles{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2.5rem 2rem 1rem;

      .role{
        background-color: $sub-color;
        color: $text-color-black;
        padding: 0.5rem 1rem;
        margin: 0 1rem;
        border-radius: 25px;
      }
    }
  }
}
</style>
