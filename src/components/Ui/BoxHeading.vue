<template lang="pug">
.box-heading.automate
  .title {{ title }}
  .line
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style lang="scss" scoped>
.box-heading{
  margin: 10rem auto 0;
  .title{
    padding: 0.5rem 1rem;
    font-size: 2rem;
    color: $sub-color;
    border: 6px solid $sub-color;
    width: fit-content;
    @media screen and (max-width: 430px){
      font-size: 1rem;
    }
  }
  .line{
    display: block;
    height: 0;
    width: 100%;
    border-bottom: 6px solid $sub-color;
    position: relative;
    top: -6px;
    margin-bottom: 2rem;
  }
}
</style>
