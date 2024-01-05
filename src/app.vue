<template lang="pug">
main
  NuxtLayout
    slot
    NuxtPage
</template>

<script>
  
export default {
  mounted() {
    try {
      Typekit.load({ async: true });
    } catch (e) {
      console.log(e);
    }
  }
}

</script>
