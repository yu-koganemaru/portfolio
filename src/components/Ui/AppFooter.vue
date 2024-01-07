<template lang="pug">
.footer.automate
  img( src="/images/copyright.png").link-icon(@click="linkToGitHub").copyright-icon
  span.copyright-text 2024~　YU KOGANEMARU.
</template>

<style lang="scss" scoped>
.footer{
  width: fit-content;
  margin: 17% auto 5rem;
  display: flex;
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