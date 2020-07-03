<template>
  <div id="app">
    <h1 class="main_title">Survey Wizard</h1>
    <!-- <Survey /> -->
    <!-- <ToolBox v-on:create-field="createField"/> -->
    <div v-if="doing_survey">
      <Survey/>
    </div>

    <button v-on:click="createSurvey">Start</button>
  </div>
</template>

<script>
import Survey from './components/Survey';
// import ToolBox from './components/ToolBox';

export default {
  name: 'App',
  components: {
    Survey
    // ToolBox
  },
  data() {
    return {
      doing_survey: false
      // surveys: []
      // fields: [

      // ]
    }
  },
  methods: {
    createSurvey() {


      this.doing_survey = true;//.push(field);
      console.log('created');
    },
    createField(field) {
      this.fields = [...this.fields, field];
    },
    deleteField(field_id) {
      this.fields = this.fields.filter(field => field.id !== field_id);
    },
    moveUp(field) {
      const fields = this.fields;
      for (const key in fields) {
        if (fields[key].id === field.id) {
          // const comp = fields[key];
          // this.fields.splice(key, 1);
          // this.fields.splice(0, 0, temp);
          return ;
          // this.fields.splice(key + 1, 0, comp);
        }
      }
      // console.log(field);
      // console.log('moveup')
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
