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
    @include textShadow(#d0576b, 50);
    position:relative;
  }
  .sub-text{
    margin-top: 4rem;
    font-size: 1.5rem;
  }
}

</style>
