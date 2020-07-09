<template>
    <div>
        <div class="tool-box">
            <button v-on:click="createField('TextField')">Text</button>
            <button v-on:click="createField('TextAreaField')">Textarea</button>
            <button>Radio</button>
            <button>Multiplechoice</button>
            <button>Scale</button>
            <button>Date</button>
            <button>Time</button>
        </div>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid'; 

export default {
    name: 'ToolBox',
    methods: {
        createField(component) {
            const field = {
                id: uuid.v4(),
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
    position: fixed;
    z-index: 1;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: column;
    border-color: black;
    border-style: solid;
    border-width: 3px 0 3px 3px;
    border-radius: 5px 0 0 5px;
    padding: 5px;
}

button {
    border: 2px solid black;
    border-radius: 3px;
    margin: 5px;
    padding: 2px 4px;
    background-color: transparent;
    outline: none;
    transition: 100ms;
}

button:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 200ms;
}

</style>