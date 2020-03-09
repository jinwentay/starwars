<template>
  <div id="app">
    <h1>May the force be with you</h1>
    <div class="horz-cards">
      <Profile></Profile>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Star Jedi', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    background: url("./assets/backgroundBanner.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  h1, h2 {
    position: fixed;
    top: 0;
    width: 100%;
    font-family: Helvetica;
    font-weight: normal;
    padding: 10px;
    margin: 10px 0px;
  }
  .horz-cards {
    margin-top: 10%;
  }
</style>
