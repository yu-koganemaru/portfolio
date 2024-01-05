<template lang="pug">
.header.bc-alphapipe-bold
  .top-link
    NuxtLink(v-bind:to="'/'") Hello world.
  nav
    NuxtLink(
      v-for="nav in navs"
      :key="nav.index"
      v-bind:to="nav.to"
    ) {{nav.title}}
      .link-under-line

</template>

<script lang="ts" setup>
const navs:{
  to: string
  title:  string
}[]=[
  {to: '/about', title: 'ABOUT'},
  {to: '/works', title: 'WORKS'},
  {to: '/contact', title: 'CONTACT'},
];
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: space-between;
  position: fixed;
  height: 4.3rem;
  width: calc(100% - 4rem);
  margin-bottom: 5rem;
  margin-left: 3rem;
  z-index:1;

  .top-link{
    margin: 1.3rem 1rem 0;
    font-size: 40px;
    @include textShadow(#d0576b, 10);

    a{
      color: #fff;
    }

    .router-link-active{
      visibility:hidden;
    }
  }

  nav{
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    height: 2rem;

    a{
      font-size: 2rem;
      margin: 0 3rem 0;
    }

    .router-link-active{
      color: #fff;

      .link-under-line{
        margin-top: -7px;
        background: #fff;
        width: 100%;
        height: 5px;
        top: -25px;
        border-radius: 25px;
      }
    }
  }

}
</style>
