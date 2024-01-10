<template lang="pug">
.footer.automate
  img(src="~/assets/images/copyright.png" alt="(C)").link-icon(@click="linkToGitHub").copyright-icon
  span.copyright-text 2024~　YU KOGANEMARU
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.footer{
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: fit-content;
  display: flex;
  @media screen and (max-width: 430px){
    margin: 17% auto 1rem;
  }
  
  .copyright-icon{
    width: 1.4rem;
    height: 1.4rem;
    @media screen and (max-width: 430px){
      width: 1rem;
      height: 1rem;
    }
  }
  .copyright-text{
    position: relative;
    bottom: 5px;
    font-size: 1.4rem;
    padding-left: 0.5rem;
    @media screen and (max-width: 430px){
      font-size: 1rem;
    }
  }
}
</style>