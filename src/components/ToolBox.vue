<template>
    <div class="tool-box">
        <button v-on:click="createField('TextField')" title="Short answer" class="icon-button icon-padding"><font-awesome-icon icon="grip-lines" /></button>
        <button v-on:click="createField('TextAreaField')" title="Long answer" class="icon-button icon-padding"><font-awesome-icon icon="align-justify" /></button>
        <button v-on:click="createField('RadioField')" title="One answer" class="icon-button icon-padding"><font-awesome-icon icon="dot-circle" /></button>
        <button v-on:click="createField('CheckBoxField')" title="Multiple answers" class="icon-button icon-padding"><font-awesome-icon icon="check-square" /></button>
        <button v-on:click="createField('ScaleField')" title="Slider" class="icon-button icon-padding"><font-awesome-icon icon="sliders-h" /></button>
        <button v-on:click="createField('TimeField')" title="Time" class="icon-button icon-padding"><font-awesome-icon icon="clock" /></button>
        <button v-on:click="createField('DateField')" title="Date" class="icon-button icon-padding"><font-awesome-icon icon="calendar-day" /></button>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid'; 

export default {
    name: 'ToolBox',
    props: ['fields'],
    methods: {
        createField(component) {
            const field = {
                id: uuid.v4(),
                order: this.fields.length,
                question: '',
                component: component
            }
            this.$emit('create-field', field);
        }
    }
}
</script>

<style>
.tool-box { 
    position: sticky;
    display: flex;
    flex-direction: column;
    top: 0;
    height: 100%;
    padding: 3px;
    transform: translate(0, 50%);
    background-color: white;
    margin-left: 5px;
    border-radius: 5px;
}

.icon-button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    transition: 100ms;
    font-size: 0.9em;
    background-color: transparent;
}

.icon-button:hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: 200ms;
}

.icon-padding {
    margin: 5px;
    padding: 2px 4px;
}
</style>