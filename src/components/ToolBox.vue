<template>
    <div class="tool-box">
        <button v-on:click="createField('TextField')" title="Short answer"><font-awesome-icon icon="grip-lines" /></button>
        <button v-on:click="createField('TextAreaField')" title="Long answer"><font-awesome-icon icon="align-justify" /></button>
        <button v-on:click="createField('RadioField')" title="One answer"><font-awesome-icon icon="dot-circle" /></button>
        <button title="Multiple answers"><font-awesome-icon icon="check-square" /></button>
        <button title="Slider"><font-awesome-icon icon="sliders-h" /></button>
        <button title="Time"><font-awesome-icon icon="clock" /></button>
        <button title="Date"><font-awesome-icon icon="calendar-day" /></button>
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

<style scoped>

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

button {
    margin: 5px;
    padding: 2px 4px;
    border: 0;
    outline: none;
    transition: 100ms;
    font-size: 1em;
    background-color: transparent;
}

button:hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: 200ms;
}

</style>