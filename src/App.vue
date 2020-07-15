<template>
  <div id="app">
    <transition name="fade">
      <Survey v-if="doing_survey"/>
      <HomePage v-if="!doing_survey" v-on:start-survey="startSurvey"/>
    </transition> 
  </div>
</template>

<script>
import HomePage from './components/HomePage';
import Survey from './components/Survey';

export default {
  name: 'App',
  components: {
    HomePage,
    Survey
  },
  data() {
    return {
      doing_survey: false
    }
  },
  methods: {
    startSurvey() {
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
