<template lang="pug">
//- PageTransition
PageTransition(title="Hello world!")

.top.automate
  .name YU KOGANEMARU
  .sub-text developer
</template>

<style lang="scss" scoped>
.top{
  text-align: center;

  .name{
    margin-top: 20rem;
    font-size: 4rem;
    @include textShadow($accent-color, 50);
    position:relative;
    @media screen and (max-width: 430px){
      margin: 50% auto 50%;
      font-size: 2rem;
    }
  }
  .sub-text{
    margin-top: 4rem;
    font-size: 1.5rem;
    @media screen and (max-width: 430px){
      margin-bottom: 30%;
    }
  }
}

</style>
