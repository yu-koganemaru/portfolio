<template lang="pug">
.work.bc-alphapipe-bold(@click="transitionToDetail()")
  img(:src="image").bg
</template>

<script lang="ts" setup>
const router = useRouter()
const props = defineProps<{ work: Work }>()
const work :Work = props.work

const image = '/portfolio/_nuxt/' + work.thumbnailImage

// Common funcs.
const transitionToDetail = () => {
  router.push(getToLink())
}
const getToLink = () => {
  return '/works/' + work.id
}

// // ----- PAGE-TRANSITION -----
// const thumbnail = ref<HTMLImageElement|null>(null);
// const emit = defineEmits(["setImageOnLayout"]);

// onMounted(() => {
//   // get DOMRect of "thumbnail".
//   const rect :DOMRect|undefined = thumbnail.value?.getBoundingClientRect()

//   router.beforeEach((to, from, next) => {
//     if (rect && to.path == getToLink()) {
//       emit('setImageOnLayout', {
//         thumbnailPath: work.thumbnailImage,
//         styles: {
//           top: rect.top + window.pageYOffset,
//           left: rect.left + window.pageXOffset,
//           height: rect.height,
//           width: rect.width
//         }
//       });
//     }
//     next()
//   })
// })

</script>

<style lang="scss" scoped>
.work{
  height: 100%;
  width: 100%;
  border-radius: 50px;
  border: 1px solid $sub-color;
  overflow: hidden;
  box-shadow: 10px 10px 0px 0px $main-dark-color;
  transition: 1s all;
  position: relative;
  text-align: center;
  margin-bottom: 60px;
  @media screen and (max-width: 430px){
    border-radius: 25px;
  }

  &:hover{
    margin-bottom: 50px;
    transition: 1s all;
    border: 10px solid $sub-color;
    transform: translate(-20px,-20px);
    box-shadow:
      10px 10px 0px 0px rgba(0, 0, 0, 0.4),
      20px 20px 0px 0px rgba(0, 0, 0, 0.3),
      30px 30px 0px 0px rgba(0, 0, 0, 0.2),
      40px 40px 0px 0px rgba(0, 0, 0, 0.1);
  }

  .bg{
    width: 100%;
    background-color: $image-background-color;
    background-size: cover;
    transition:1s all;

    &:hover{
      transition:1s all;
      transform:scale(1.05,1.05);
    }
    &:hover .detail{
      transition:1s all;
      height: 20%;
    }
  }

  .detail{
    height: 0%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: -20px;
    color: $sub-color;
    font-size: 2rem;
    transition:1s all;
  }

}
</style>
