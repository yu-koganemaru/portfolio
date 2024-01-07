<template lang="pug">
//- PageTransition
PageTransition(title="CONTACT")
//- FirstView
FirstView(word="CONTACT.")

.contact.automate

  .contact-content
    .mail 
      .contact-head Mail
      .contact-body 
        p.account yu.koganemaru@gmail.com

    .twitter
      .contact-head X (Twitter)
      .contact-body 
        p.account @yu_web_engineer
        img(src="~/assets/images/link-icon.png").link-icon(@click="linkToTwitter")

    .github
      .contact-head GitHub
      .contact-body
        p.account yu-koganemaru
        img(src="~/assets/images/github-mark-white.png").link-icon(@click="linkToGitHub")

</template>

<script lang="ts" setup>
const linkToTwitter = () => {
  const url = "https://twitter.com/yu_web_engineer"
  window.open(url, '_blank')
}
const linkToGitHub = () => {
  const url = "https://github.com/yu-koganemaru"
  window.open(url, '_blank')
}

</script>

<style lang="scss" scoped>
.contact{
  .contact-content{
    text-align: center;
    width: fit-content;
    margin: 0 auto 5rem;
    font-size: 1.5rem;
    .contact-head{
      width: 30rem;
      margin: 3rem 0 2rem;
      padding: 0.5rem;
      background-color: $sub-color;
      color: $main-color;
    }
    .contact-body{
      display: flex;
      position: relative;
      width: 100%;
      .account{
        width: 100%;
        text-align: center;
      }
      .link-icon{
        left: 80%;
        position: absolute;
        width: 2rem;
        height: 2rem;
      }
    }
  }
}


</style>
