<template lang="pug">
//- PageTransition
PageTransition(title="ABOUT")
//- FirstView
FirstView(word="ABOUT ME.").firstview

.about.automate

  BoxHeading(title="GREETING")
  .content-text
    p.hilight-para こんにちは！
    p
      span.automate WEB
      span エンジニアをしている
      span.hilight-letter.automate YU
      span と申します。

    p このサイトは僕個人の紹介や、実績の掲載を目的としたサイトになります。
    p よろしければごゆっくりとなさっていってください。

  BoxHeading(title="BACKGROUND")
  .content-text.hilght-first
    p 高校卒業後、父親の後押しがありオーストラリアに一年ほど留学をしていました。
    p その後、19歳の時に未経験からSES事業会社へ入社し3年ほどでフリーに転向することになります。
    p 現在は埼玉〜東京近辺で活動しています。

    br
    p 考えるという行為が嫌ではなく、腕を組んでむむっとしている時間が割と好きです。
    p 面倒なことや苦しいこともありますが、やはり、ものづくりには楽しさであったり気持ちよさがあって好きだな〜と感じます。
    p また、人と人であったり、人と価値のある沢山のものを繋いでいく喜び。
    p そういったものがこの業種において僕を動かす根幹にある気がしています。

  BoxHeading(title="PERSONAL")

  .heading PROFILE
  .content-profile
    table.profiles
      tr(v-for="value, key, index in profiles" :key="index")
        td.key {{ key }}
        td :
        td.value(v-if="isKey(key, 'BIRTH')") {{ getBirthday()}}
        td.value(v-else-if="isKey(key, 'AGE')") {{ getAge()}}
        td.value(v-else) {{ value }}

  .heading SKILLS
  .content-skills
    ui.skills.bc-alphapipe
      li(v-for="skill in skills" :key="skill.index").skill {{ skill }}

  .heading TIPS
  .content-tips
    ui.tips.bc-alphapipe
      li(v-for="tip in tips" :key="tip.index").tip
        p.obvia {{ tip }}

  BoxHeading(title="THOUGHT")
  .content-text
    p IT業界に足を踏み入れたのは19歳の時、当時はやりたいこともなく、働く目的なんてお金くらいのものでした。
    p そこから自分の頑張りや周りの人の支えもあって、現在、ありがたいことに生きていくことができています。
    p そんな僕の「こんなことをしたいな〜」とか、「これからはこうなっていきたいな〜」という思い。
    p また、そこへ至った背景を書かせていただければと思います。

    br
    h2 いままで
    br
    .text-block
      p 未経験での中途採用から独立を経て、おかげさまで沢山のプロジェクトに関わらせてただけるようになりました。
      p その間に時世の影響や勤務形態の変化からフルリモートでの在宅作業がメインになり、
      p クライアントやチームメンバとのコミュニケーション方法や仕事の進め方なども変わってきました。
      p また、仕事上でもできることや任せていただける範囲が大きく広がり、それ以外の経験も積み重なってくると、
      p 世の中のことや自分自身のことなど、少しづつ見えるものが増えてきました。
      br
      p こうして改めていままでのことを振り返ってみると、社会人になりたての頃と比べて沢山の変化があったのを感じます。
      p そしてだんだんと得意分野や好きなこと、好きな人、モチベーションになるもの、
      p 仕事においての哲学など自己について考えるようになりました。
      br
      p 設計が好き。を踏み込んで考えてみると、これなら動くんじゃないかという期待感や問題解決ができた時の達成感など。
      p コーディングも好きですが、感覚として使う脳みそが切り離されていて独自のエネルギーが必要だなと感じます。
      p 何よりも、コミュニケーションにおいて意外と人と話すこと、文章を書くことが嫌いではないということ。
      p なんだかんだで僕は人間が好きであるし、これまで人に囲まれて生きてきたのだなと思いました。

    br
    h2 これから
    br
    .text-block
      p そんな中で一番大きな気付きというか実感したことがあります。
      p それは「世界は人が回している」ということです。
      p 「そんなんあたりめーじゃんかさ」とか言われそうですが。
      br
      p 単純なことではありますが僕にとってはインパクトのあるものでした。
      p UXなどの分野の存在意義を身をもって理解しました。
      br
      p どんな製品も人に優しいものでなければ良いものとは言えません。
      p また、どんなに良い製品だとしても、人に知られていなければ価値がありません。
      p そしてそれらを考えて、手を動かして、作り出しているのは人なのです。
      br
      p というふうに、今はバックエンドのお仕事でお声がけいただけることが多いですが、
      p ゆくゆくはフロントエンドやデザインにも携われるようになりたいです。
      p 最終的にはUXなどの領域にも手を伸ばせるように。
      br
      p 人との繋がりを考えながら、人のことを考えながら、
      p これから沢山のことに挑戦していければと思います。
</template>

<script setup lang="ts">
import skillsData from '@/assets/json/skills.json'
import tipsData from '@/assets/json/tips.json'
import { profiles } from '~/types/profiles'

const skills: string[] = skillsData.skills
const tips: string[] = tipsData.tips

const isKey = (key: string, str: string) => {
  return (key == str)
}
const getBirthday = () => {
  return profiles.BIRTH.getFullYear() + '/0' + (profiles.BIRTH.getMonth() + 1) + '/' + profiles.BIRTH.getDate()
}
const getAge = () => {
  return profiles.AGE()
}
</script>

<style lang="scss" scoped>
.about{
  height: 100%;
  width: 70%;
  margin: 30% auto 10%;
  text-align: center;
  color: $sub-color;
  @media screen and (max-width: 1280px){
    width: 80%;
  }
  @media screen and (max-width: 960px){
    width: 90%;
  }
}
.heading{
  background-color: $sub-color;
  color: $main-color;
  width: 90%;
  padding: 0.3rem;
  font-size: 2rem;
  margin: 10rem auto 0;
  border-radius: 25px;
  @media screen and (max-width: 430px){
    margin: 3rem auto 0;
    font-size: 1.3rem;
  }
}
.content-profile{
  font-size: 1.5rem;
  width: 35rem;
  margin: 5rem auto 5rem;
  @media screen and (max-width: 430px){
    margin: 3rem auto 3rem;
    width: 100%;
    font-size: 1rem;
  }
}
.profiles{
  width: 100%;
  .key{
    padding-left: 8rem;
    text-align: start;
    width: 45%;
    @media screen and (max-width: 430px){
      padding-left: 2rem;
      width: 40%;
    }
  }
  .value{
    padding-left: 1rem;
    text-align: start;
    width: 45%;
    @media screen and (max-width: 430px){
      width: 60%;
    }
  }
}
.content-skills{
  margin: 5rem auto 5rem;
  width: 40rem;
  @media screen and (max-width: 430px){
    width: 100%;
  }
}
.skills{
  display: flex;
  flex-wrap: wrap;
  margin-left: 2rem;
  @media screen and (max-width: 430px){
    margin-left: 1rem;
  }
  .skill{
    margin: 2rem 1rem;
    width: 10rem;
    list-style: none;
    position: relative;
    padding: 0.5rem 1rem;
    box-shadow: 6px -6px $text-color-black;
    outline: 3px solid $main-color;
    border: 3px solid $text-color-black;
    background-color: $sub-color;
    color: $text-color-black;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    @media screen and (max-width: 430px){
      margin: 0.5rem 1rem;
      width: 42%;
      font-size: 0.8rem;
    }
  }
}
.content-text{
  font-family: "source-han-sans-japanese";
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.8em;
  width: 90%;
  margin: 5rem auto 10rem;
  text-align: start;
  @media screen and (max-width: 430px){
    margin: 2rem auto 6rem;
    font-size: 0.8rem;
  }
  h2{
    margin: 2rem 0 0;
    font-size: 2rem;
  }
  .hilight-para{
    padding: 0.8rem 0;
    font-size: 1.5rem;
    @media screen and (max-width: 430px){
      font-size: 1rem;
    }
  }
  .hilight-letter{
    padding: 0.5rem;
    font-size: 1.7rem;
    @media screen and (max-width: 430px){
      font-size: 1rem;
    }
  }

  &.hilght-first{
    &::first-letter{
      padding: 0 0.3rem 0.3rem 0;
      font-size: 2rem;
    }
  }

  .text-block{
    margin: 0 0 1rem 2rem;
  }
}
.content-tips{
  width: 70%;
  margin: auto;
  margin-bottom: 10rem;
  @media screen and (max-width: 1280px){
    width: 80%;
  }
  @media screen and (max-width: 960px){
    width: 90%;
  }
  .tips{
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
    margin-top: 5rem;
    @media screen and (max-width: 430px){
      margin-left: 0;
    }
    .tip{
      margin: 2rem 1rem;
      padding: 1rem 1rem;
      width: 90%;
      list-style: none;
      position: relative;

      box-shadow: 10px -10px $text-color-black;
      outline: 3px solid $main-color;
      border: 3px solid $text-color-black;
      border-radius: 15px;
      background-color: $sub-color;
      color: $text-color-black;
      font-size: 1.1rem;
      font-weight: bold;
      text-align: center;
      @media screen and (max-width: 430px){
        width: 100%;
        font-size: 0.8rem;
      }
    }
  }
}

</style>
