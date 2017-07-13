<template>
<section class="types">
  <header>
    <h2>{{listtitle}}</h2>
    <div class="cleanfix"></div>
  </header>
  <div class="content-section">
    <ul class="type-list">
      <li>
        <router-link to="/movie/classic">经典
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/underrated">冷门佳片
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/doubantop">豆瓣高分
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/action">动作
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/comedy">喜剧
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/love">爱情
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/mystery">悬疑
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/horror">恐怖
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/scifi">科幻
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/sweet">治愈
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/artfilm">文艺
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/youth">成长
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/animation">动画
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/chinese">华语
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/western">欧美
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/korean">韩国
          <span></span></router-link>
      </li>
      <li>
        <router-link to="/movie/japanese">日本
          <span></span></router-link>
      </li>
      <li></li>
    </ul>
  </div>
</section>
</template>

<script>
export default {
  name: 'Vinterests',
  data() {
    return {

    }
  },

  props: {
    listtitle: String
  },
}
</script>

<style scoped>
.types {
  margin-right: -25px;
}

.types .content-section {
  margin-bottom: 0;
  margin-left: .94rem;
}

.type-list {
  padding: 1.12rem 0 1.88rem;
  color: #eee;
  font-size: .9rem;
  overflow: hidden;
}

.type-list li {
  width: 41.5%;
  border-top: solid 1px #eee;
  border-right: solid 1px #eee;
  float: left;
  padding-right: 1.12rem;
  height: 2.64rem;
  text-align: left;
  margin-left: 0;
}

@media screen and (max-width: 399px) and (min-width: 360px) {
  .type-list li {
    width: 40.5%;
  }
}

.type-list a {
  float: left;
  display: inline-block;
  width: 100%;
  line-height: 2.64rem;
  color: #42bd56;
  font-size: .9rem;
}

.type-list li:first-child {
  margin-left: 0;
}

.type-list li:nth-child(even) {
  border-right: none;
  padding-left: 1.12rem;
}

.type-list span {
  color: #ccc;
  float: right;
  font-weight: bold;
  display: inline-block;
  border-right: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  width: .5rem;
  height: .5rem;
  transform: rotate(-45deg);
  margin-top: 1rem;
}

.type-list li:last-child,
.type-list li:nth-last-child(2) {
  border-bottom: solid 1px #eee;
}
</style>
