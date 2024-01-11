<template lang="pug">
transition.bc-alphapipe-bold
  .shutter
    .transition-text
      p.upper {{ title }}
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'shutter'
  }
})
defineProps<{ title: string }>()
</script>

<style lang="scss" scoped>
.shutter{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:$sub-color;
  z-index:9999;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background-color: $main-color;
    width: 0;
    height: 1px;
  }

  .transition-text{
    text-align: center;
    color: $main-color;
    font-size: 5rem;
    animation-name:fadeInAnime;
    animation-duration:1.3s;
    animation-fill-mode:forwards;
    opacity:0;
  }
  @media screen and (max-width: 430px){
    font-size: 1.5rem;
  }
  .upper{
    margin-top: 21%;
    @media screen and (max-width: 960px){
      margin-top: 29%;
    }
    @media screen and (max-width: 430px){
      margin: 60% auto 0;
      font-size: 2.8rem;
    }
  }
}

.shutter-enter-active, .shutter {
  -webkit-animation: byeShutter 3.6s forwards;
          animation: byeShutter 3.6s forwards;
}
.shutter-enter-active, .shutter::before {
  -webkit-animation: shutterOpen 2.7s forwards;
          animation: shutterOpen 2.7s forwards;
}
@keyframes fadeInAnime{
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
@keyframes byeShutter {
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}
@keyframes shutterOpen {
  0% {
    width: 100%;
    height: 100%;
  }
  25% {
    width: 100%;
    height: 0px;
  }
  30% {
    width: 0%;
    height: 0px;
  }
  40% {
    width: 0;
    height: 10px;
  }
  70% {
    width: 100%;
    height: 10px;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}
</style>
