<template lang="pug">
.firstview.obvia
  .word {{ word }}
</template>

<script setup lang="ts">
defineProps<{ word: string }>()
</script>

<style lang="scss" scoped>
.firstview{
  height: 100%;
  margin: 0 auto 30rem;
  text-align: center;
  color: $sub-color;
  font-size: 8rem;
  @media screen and (max-width: 1280px){
    font-size: 7rem;
  }
  @media screen and (max-width: 960px){
    font-size: 5rem;
  }
  @media screen and (max-width: 430px){
    font-size: 3rem;
  }
  .word{
    margin: 20% auto 23%;
    @media screen and (max-width: 1280px){
      margin:25% auto 10%;
    }
    @media screen and (max-width: 960px){
      margin: 33% auto 10%;
    }
    @media screen and (max-width: 430px){
      margin: 70% auto 10%;
    }
  }

  &::before,&::after {
    position: absolute;
    width: 20%;
    height: 20%;
    border-radius: 25px 0px 25px 0px;
    content: '';
  }
  &::before {
    border-left: solid 3px;
    border-top: solid 3px;
    top: 18%;
    left: 15%;
    @media screen and (max-width: 430px){
      top: 30%;
      left: 5%;
    }
  }
  &::after {
    border-right: solid 3px;
    border-bottom: solid 3px;
    bottom: 13%;
    right: 15%;
    @media screen and (max-width: 430px){
      bottom: 10%;
      right: 5%;
    }
  }
}
@keyframes fadeInFirstview{
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
