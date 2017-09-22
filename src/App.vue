<template>
  <div id="app">
    <ul class="nav">
      <li>
        <router-link to="/" exact>首页</router-link>
      </li>
      <li>
        <router-link to="/news">新闻列表</router-link>
      </li>
      <li>
        <router-link to="/counter">计数</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.nav {
  height: 60px;
  margin: 0;
  padding: 0;
  line-height: 60px;
  text-indent: 20px;
  background: #ccc;
}

.view {
  background: #ccc;
  min-height: 600px;
  padding:0 20px 20px 10px;
}

a {
  color: #000;
}

.router-link-active {
  color: #fff;
}

.nav li {
  float: left;
  list-style: none;
}
</style>
