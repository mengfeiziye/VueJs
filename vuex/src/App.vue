<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="pageOne">页面一</router-link>
      </li>
      <li>
        <router-link to="pageTwo">页面二</router-link>
      </li>
      <li>
        <router-link to="pageThree">页面三</router-link>
      </li>
      <li>
        <router-link to="pageFour">页面四</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul,li {
  list-style: none;
}
li {
  float: left;
  padding: 0 20px;
}
</style>
