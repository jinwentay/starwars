<template>
  <div class="container-fluid">
    <div class="row flex-row flex-nowrap">
      <div :key="person.name" v-for="(person, index) in people" class="col-sm-6 col-md-4 col-lg-3">
        <div class="card card-block" @click="showModal = true; select(index);">
          <img class="planet" :src="require('./assets/planets/p'+index.toString()+'.png')">
          <p>{{ person.name }}</p>
        </div>
      </div>
    </div>
    <modal v-bind:char="people[selectedPerson]" v-if="showModal" @close="showModal = false"></modal>
  </div>
</template>

<script>
    export default {
        name: "character",
        data() {
          return {
            people: [],
            showModal: false,
            selectedPerson: 0
          }
        },
        methods: {
          select(index) {
            this.selectedPerson = index;
          }  
        },
        created() {
          this.$http.get('https://swapi.co/api/people/').then(function(data) {
            this.people = data.body.results;
          })
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
    /* box-shadow: 5px 10px black; */
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    transition: all 0.2s ease-in-out;
    font-size: 23px;
  }
  .card::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.6);
    transition: opacity 0.2s ease-in-out;
  }

  .card:hover {
    transform: scale(1.1, 1.1);
  }

  /* Fade in the pseudo-element with the bigger shadow */
  .card:hover::after {
    opacity: 1;
  }

  .planet {
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 180px;
    height: 180px;
  }
  p {
    color: #000;
  }

  @media screen and (max-width: 1200px){
    .card {
      width: 250px;
      height: 250px;
      font-size: 20px;
    }

    .planet {
      width: 150px;
      height: 150px;
    }
    
  }

</style>
