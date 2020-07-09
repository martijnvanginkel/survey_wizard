<template>
    <div class="survey">
        <ToolBox v-on:create-field="createField"/>
        <div class="question-box">
            <input class="survey-title" type="text" placeholder="Title">
            <input class="survey-description" type="text" placeholder="Description">
        </div>    
        <transition-group name="list" tag="p">
            <div v-bind:key="field.id" v-for="field in fields" class="panel">
                <component  v-bind:is="field.component" 
                            v-bind:field="field"
                            v-on:delete-field="deleteField"
                            v-on:move-up="moveUp">
                </component>
                
            </div>
        </transition-group>
    </div>
</template>

<script>
import ToolBox from './ToolBox';
import TextField from './TextField';
import TextAreaField from './TextAreaField';



export default {
    name: 'Survey',
    components: {
        ToolBox,
        TextField,
        TextAreaField
    },
    data() {
        return {
            fields: []
        }
    },
    methods: {
        createField(field) {
            this.fields = [...this.fields, field];
        },
        deleteField(field_id) {
            console.log(field_id)
            this.fields.splice(field_id, 1)
            // this.fields = this.fields.filter(field => field.id !== field_id);
        },
        moveUp(field_id) {

            this.fields = this.fields.filter(field => field.id !== field_id);
            // console.log('move up:' + field)
            // this.$emit('moveUp', field);
        }
    }
}
</script>

<style>

.colors {
    background-color: #d3a3a2;
    background-color: #e2b0af;
    background-color: #f0bebd;
    background-color: #ffcccb;
    background-color: #ffdad9;
    background-color: #ffe8e7;
    background-color: #fff7f6;
}

.panel {
    display: flex;
    flex-direction: column;
    transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
}

.list-enter {
  transform: translateY(-30px);
}

.list-leave-to {
  transform: translateY(-30px);
}

.list-leave-active {
    width: 100%;    
  position: absolute;
}

.survey {
    position: relative;
    margin: 0 auto;
    max-width: 640px;
}

.survey-title {
    font-size: 1.5em;
    margin-bottom: 15px;
}

.survey-title, .survey-description {
    border: 0;
    border-bottom: 1px solid #f0bebd;
    padding-bottom: 5px;
    outline: none;
    transition: 200ms;
}

.survey-title:focus, .survey-description:focus {
    padding-bottom: 4px;
    border-bottom: 2px solid #e2b0af;
    transition: 200ms;
}

.survey-title::placeholder, .survey-description::placeholder {
    color: #f0bebd;
}

</style>