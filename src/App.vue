<template>
  <div id="app">
    <h1 class="main_title">Survey Wizard</h1>
    <Survey v-on:moveUp="moveUp" v-on:delete-field="deleteField" v-bind:fields="fields"/>
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
