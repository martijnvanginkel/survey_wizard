<template>
  <div id="app">
    <!-- <header class="main-header">
      <h1>survey wizard</h1>
      <p>create and share surveys quickly.</p>
    </header> -->
    <transition name="fade">
      <Survey v-if="doing_survey"/>
      <button v-if="!doing_survey" v-on:click="createSurvey" class="start-button">start</button>
    </transition>
    
  </div>
</template>

<script>
import Survey from './components/Survey';

export default {
  name: 'App',
  components: {
    Survey
  },
  data() {
    return {
      doing_survey: false
    }
  },
  methods: {
    createSurvey() {
      this.doing_survey = true;
    }
  }
}
</script>

<style>

html {
  overflow-y: scroll;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #ffe8e7;
}

#app {
  margin: 0;
  padding: 0;
}

h1, p {
  margin: 0;
  padding: 0;
}

.main-header {
  width: 100%;
  text-align: center;
}

.start-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 200ms;
  margin: 0 auto;
  padding: 10px 25px;
  border: 0;
  border-bottom: 2px solid #ff7f7a;
  border-radius: 100px;
  color: #fffff2;
  font-size: 1em;
  letter-spacing: 1px;
  background-color: lightsalmon;
  outline: none;
}

.start-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
  transition: 500ms;
  cursor: pointer;
  background-color: #ff7f7a;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
