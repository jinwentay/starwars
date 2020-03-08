<template>
  <div class="container-fluid">
    <div class="row flex-row flex-nowrap">
      <div v-for="person in people" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card card-block">
          <img class="planet" :src="require('./assets/planets/moon.png')">
          <p>{{ person }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Character",
        data() {
          return {
            people: ['Luke Skywalker', 'Yoda', 'Darth Vader', 'Han Solo', 'Chewbacca', 'Princess Leia', 'R2-D2']
          }
        }
    }
</script>

<style scoped>
  .container-fluid {
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
    background: transparent;
  }
  .card-block{
    min-height: 220px;
  }

  .card {
    justify-content: space-around;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    text-align: center;
    box-shadow: 5px 10px black;
  }

  .planet {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 200px;
  }
  p {
    color: #000;
  }

</style>
