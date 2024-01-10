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
  title: string
}[] = [
  { to: '/about', title: 'ABOUT' },
  { to: '/works', title: 'WORKS' },
  { to: '/contact', title: 'CONTACT' }
]
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: space-between;
  position: fixed;
  height: 4.3rem;
  width: calc(100% - 4rem);
  margin: 0 3rem 0 5rem;
  z-index:1;
  @media screen and (max-width: 430px){
    position: static;
    display: block;
    margin: auto;
  }

  .top-link{
    margin: 1.3rem 1rem 0;
    font-size: 40px;
    @include textShadow($accent-color, 10);
    @media screen and (max-width: 430px){
      font-size: 1.5rem;
      text-align: center;
      margin: 1rem auto 1rem;
    }
    a{
      color: $sub-color;
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
    @media screen and (max-width: 430px){
      margin-top: 0;
      justify-content: space-between;
    }

    a{
      font-size: 2rem;
      margin: 0 3rem 0;
      @media screen and (max-width: 960px){
        margin: 0 1.5rem 0;
      }
      @media screen and (max-width: 430px){
        margin: 0;
        font-size: 1.3rem;
      }
    }

    .router-link-active{
      color: $sub-color;

      .link-under-line{
        margin-top: -7px;
        background: $sub-color;
        width: 100%;
        height: 5px;
        top: -25px;
        border-radius: 25px;
        @media screen and (max-width: 430px){
          margin-top: 0px;
        }
      }
    }
  }

}
</style>
