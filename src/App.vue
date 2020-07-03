<template>
  <div id="app">
    <h1 class="main_title">Survey Wizard</h1>
    <Survey v-bind:fields="fields"/>
    <ToolBox v-on:create-field="createField"/>
  </div>
</template>

<script>
import Survey from './components/Survey';
import ToolBox from './components/ToolBox';

export default {
  name: 'App',
  components: {
    Survey,
    ToolBox
  },
  data() {
    return {
      fields: [

      ]
    }
  },
  methods: {
    createField(field) {
      this.fields = [...this.fields, field];
    }
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}

.main_title {
  font-family: 'SF Pixelate';
  width: 100%;
  text-align: center;
}
</style>
