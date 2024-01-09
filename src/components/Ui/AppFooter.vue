<template lang="pug">
.footer.automate
  img(src="~/assets/images/copyright.png" alt="(C)").link-icon(@click="linkToGitHub").copyright-icon
  span.copyright-text 2024~　YU KOGANEMARU
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.footer{
  width: fit-content;
  margin: 5rem auto 5rem;
  display: flex;
  @media screen and (max-width: 428px){
    margin: 17% auto 1rem;
  }
  @media screen and (max-width: 390px){
    margin: 10% auto 0.5rem;
  }
  
  .copyright-icon{
    width: 1.4rem;
    height: 1.4rem;
  }
  .copyright-text{
    position: relative;
    bottom: 5px;
    font-size: 1.4rem;
    padding-left: 0.5rem;
  }
}
</style>