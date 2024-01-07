<template lang="pug">
.firstview.obvia
  .word {{ word }}
</template>

<script setup lang="ts">
defineProps<{ word: string }>()
</script>

<style lang="scss" scoped>
.firstview{
  text-align: center;
  color: $sub-color;
  font-size: 10rem;
  height: 100%;
  margin: 0 auto 30rem;

  .word{
    margin: 20% auto 23%;
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
  }
  &::after {
    border-right: solid 3px;
    border-bottom: solid 3px;
    bottom: 13%;
    right: 15%;
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
