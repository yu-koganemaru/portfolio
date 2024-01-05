<template lang="pug">
//- PageTransition
PageTransition(title="ABOUT")
//- FirstView
FirstView(word="ABOUT ME.").firstview

.about.automate

  BoxHeading(title="GREETING")
  .content-text
    p.hilight こんにちは！
    p
      span.automate WEB
      span エンジニアをしている
      span.hilight-black.automate YU
      span と申します。
    
    
    p このサイトは僕個人の紹介や、実績の掲載を目的としています。
    p よければゆるゆるとご覧ください。
  
  BoxHeading(title="BACKGROUND")
  .content-text.hilght-first
    p 高校卒業後、父親の後押しがありオーストラリアに一年ほど留学をしていました。
    p その後、19歳の時に未経験からSES事業会社へ入社し3年ほどでフリーに転向することになります。
    p 現在は埼玉〜東京近辺で活動しています。
    
    br
    p 考えるという行為が嫌ではなく、腕を組んでむむっとしている時間が割と好きです。
    p 面倒なことや苦しいこともありますが、やはりものづくりには楽しさであったり気持ちよさがあるなと思います。
    p また、人と人であったり、人と価値のある沢山のものを繋いでいく。
    p そういったものがこの業種において僕を動かす根幹にある気がしています。

  BoxHeading(title="THOUGHT")
  .content-text
    p この業界に足を踏み入れてから沢山のプロジェクトに関わらせていただきました。
    p 歳を重ねるにつれて、世の中のことや自分自身のことなど、少しづつ視野が広がってきたのを感じます。
    p そんな僕の考えについて書かせてください。
    p 今までの経験や考えと、そこから見た、これからについての目標になります。
    
    br
    h2 いままで
    br
    .text-block
      p 19歳で足を踏み入れたIT業界、当時は働く目的なんてお金くらいのものでした。
      p だんだんと時間がたつにつれて

    br
    h2 これから
    br
    .text-block
      p 沢山のプロジェクトや人と関わり、気づいたのは「世界は人が回している」、ということです。
      p なので今はバックエンドのお仕事をいただくことが多いですが、最近はフロントエンドやデザインにも興味があります。
      p 設計やデータベース、APIなどのバックエンドの知識や経験を武器に、
      p 人と接する面であるフロント領域もこれからどんどん挑戦していければと思います。

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

</template>

<script setup lang="ts">
import skillsData from '@/assets/json/skills.json'
import tipsData from '@/assets/json/tips.json'
import { profiles } from '~/types/profiles'

const skills: string[] = skillsData.skills;
const tips: string[] = tipsData.tips;

const isKey = (key: string, str: string) => {
  return (key == str);
}
const getBirthday = () => {
  return profiles.BIRTH.getFullYear() + '/0' + (profiles.BIRTH.getMonth() + 1) + '/' + profiles.BIRTH.getDate()
}
const getAge = () => {
  return profiles.AGE();
}
</script>

<style lang="scss" scoped>

.firstview{
  margin-bottom: 10rem;
}
.about{
  height: 100%;
  width: 70%;
  margin: 30% auto 10%;
  text-align: center;
  color: #fff;

  .content-summary{
    font-family: "source-han-sans-japanese";
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.8em;
    width: 90%;
    margin: 1rem auto 1rem;
    text-align: start;
  }
}
.heading{
  background-color: #fff;
  color: #b8d200;
  width: 45rem;
  padding: 0.3rem;
  font-size: 2rem;
  margin: 10rem auto 0;
  border-radius: 25px;
}
.content-profile{
  font-size: 1.5rem;
  width: 35rem;
  margin: 5rem auto 5rem;
}
.profiles{
  width: 100%;
  .key{
    padding-left: 8rem;
    text-align: start;
    width: 45%;
  }
  .value{
    padding-left: 1rem;
    text-align: start;
    width: 45%;
  }
}
.content-skills{
  margin: 5rem auto 5rem;
  width: 40rem;
}
.skills{
  display: flex;
  flex-wrap: wrap;
  margin-left: 2rem;
  .skill{
    margin: 2rem 1rem;
    width: 10rem;
    list-style: none;
    position: relative;
    padding: 0.5rem 1rem;
    box-shadow: 6px -6px #212121;
    outline: 3px solid #b8d200;
    border: 3px solid #212121;
    background-color: #fff;
    color: #212121;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
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
  .hilight{
    padding: 0.5rem 0;
    font-size: 1.7rem;
  }
  .hilight-black{
    padding: 0.5rem;
    font-size: 1.7rem;
    color: #333;
  }

  &.hilght-first{
    &::first-letter{
      padding: 0 0.3rem 0.3rem 0;
      font-size: 3rem;
    }
  }

  .text-block{
    margin: 0 0 1rem 2rem;
  }
}
.content-tips{
  width: 60%;
  margin: auto;
  margin-bottom: 10rem;
  .tips{
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
    margin-top: 5rem;
    .tip{
      margin: 2rem 1rem;
      padding: 1rem 1rem;
      width: 90%;
      list-style: none;
      position: relative;
      
      box-shadow: 10px -10px #212121;
      outline: 3px solid #b8d200;
      border: 3px solid #212121;
      border-radius: 15px;
      background-color: #fff;
      color: #212121;
      font-size: 1.1rem;
      font-weight: bold;
      text-align: center;
    }
  }
}


</style>
