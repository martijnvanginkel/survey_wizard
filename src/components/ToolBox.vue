<template>
    <div class="tool-box">
        <button v-on:click="createField('TextField')">Text</button>
        <button v-on:click="createField('TextAreaField')">Textarea</button>
        <button>Radio</button>
        <button>Multiplechoice</button>
        <button>Scale</button>
        <button>Date</button>
        <button>Time</button>
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
    top: 0;
    transform: translate(0, 50%);
    height: 100%;
    background-color: green;
    display: flex;
    flex-direction: column;
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