<template>
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <h3>{{ char.name }}</h3>
                <button @click="$emit('close')"><font-awesome-icon icon="times" size="2x"/></button>
              </div>

              <div class="modal-body">
                <div class="info">
                    <i><font-awesome-icon icon="birthday-cake" size="lg"/></i>
                    <span>Birth Year: {{ char.birth_year }}</span>
                </div>
                <div class="info">
                    <i><font-awesome-icon icon="venus" size="lg"/></i>
                    <span>Gender: {{ char.gender }}</span>
                </div>
                <div class="info">
                    <i><font-awesome-icon icon="ruler" size="lg"/></i>
                    <span>Height: {{ char.height }} cm</span>
                </div>
                <div class="info">
                    <i><font-awesome-icon icon="weight" size="lg"/></i>
                    <span>Mass: {{ char.mass }} kg</span>
                </div>
                <div class="info">
                    <i><font-awesome-icon icon="adjust" size="lg"/></i>
                    <span>Skin Colour: {{ char.skin_color }}</span>
                </div>
                <div class="info">
                    <i><font-awesome-icon icon="eye" size="lg"/></i>
                    <span>Eye Colour: {{ char.eye_color }}</span>
                </div>
                <div class="info">
                    <i><font-awesome-icon icon="user-circle" size="lg"/></i>
                    <span>Hair Colour: {{ char.hair_color }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
    export default {
        name: 'modal',
        props: ['char']
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
    button {
        width: 40px;
        height: 40px;
        background-color: black;
        color:#fff;
        border: none;
        margin-top: 5px;
    }
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: opacity 0.3s ease;
        color: #0A1020;
    }

    .modal-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
    }

    .modal-container {
        width: 500px;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        border-radius: 5px;
        padding: 5px;
        background-color: black;
    }
    .modal-header h3 {
        font-family: 'Oswald';
        margin: 5px 0px 5px 10px;
        color: #ffffff;
    }
    .modal-body {
        margin-bottom: 20px;
    }
    .info {
        display: flex;
        align-items: center ;
        text-align: left;
        padding: 10px;
        font-family: 'Oswald';
    }
    .info>i {
        width: 22px;
        text-align: center;
        margin-right: 10px;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px){
        .modal-container {
            width: 400px;
        }
    }
</style>