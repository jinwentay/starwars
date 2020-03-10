<template>
  <div id="app">
    <h1>May The Force Be With You</h1>
    <div class="horz-cards">
      <profile></profile>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bangers|Oswald|Squada+One|Teko:700&display=swap');
  #app {
    font-family: 'Oswald', sans-serif;
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
  h1 {
    position: fixed;
    top: 0;
    width: 100%;
    font-family: 'Bangers', cursive;
    font-weight: normal;
    font-size: 60px;
    padding: 10px;
    margin: 10px 0px;
  }
  .horz-cards {
    margin-top: 15%;
  }

  @media screen and (max-width: 1000px){
    .horz-cards {
      margin-top: 30%;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 40px;
    }
  }
</style>
