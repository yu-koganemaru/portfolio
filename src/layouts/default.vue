<template lang="pug">
#cursor.cursor
AppNavbar
//- .transition-cover(:style="styles")
.content(:style="contentStyles")
  NuxtPage(@setImageOnLayout="setImage")
AppFooter
</template>

<script setup lang="ts">
// Setting cursor desigh.
let cursor: any
onMounted(() => {
  cursor = document.getElementById('cursor')
  document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)'
  })
  const link = document.querySelectorAll('a')
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) { cursor.classList.add('cursor--hover') })
    link[i].addEventListener('mouseout', function (e) { cursor.classList.remove('cursor--hover') })
  }
})

// // PageTransition for Works.
// let styles = ref<CorverStyles>();
// let contentStyles = ref<object>();

// const setImage = (stylesObj :CorverStylesObj) => {
//   styles = {
//     backgroundImage : 'url(/_nuxt/assets/images/' + stylesObj.thumbnailPath + ')',
//     top : stylesObj.styles.top + 'px',
//     left : stylesObj.styles.left + 'px',
//     height : stylesObj.styles.height + 'px',
//     width : stylesObj.styles.width + 'px',
//   };
//   contentStyles = {
//     display: 'none'
//   }
// }
// const resetImage = (stylesObj :object) => {
//   thumbnailPath = '';
//   styles = {};
// }
</script>

<style lang="scss">
.content{
  padding: 5rem 5rem 0;
  @media screen and (max-width: 430px){
    padding: 1rem 1rem 0;
  }
}
.transition-cover{
  position: absolute;
  background-color: $sub-color;
  // background-image: v-bind(backgroundImage);
  background-size: cover;
  border: 8px solid $sub-color;
  border-radius: 50px;
  z-index:9999;
}
</style>
