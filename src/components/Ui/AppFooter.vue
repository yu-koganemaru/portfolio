<template lang="pug">
.footer.automate
  .copyright
    img(src="~/assets/images/copyright.png" alt="(C)").copyright-icon
    span.copyright-text 2024~ YU KOGANEMARU
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.footer{
  margin: 17% auto 1rem;
  @media screen and (max-width: 430px){
    margin: 30% auto 1rem;
  }
  .copyright{
    display: flex;
    width: fit-content;
    margin: 0 auto auto;
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
}
</style>
