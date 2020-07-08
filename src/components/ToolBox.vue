<template>
    <div>
        <div class="tool_box">
            <button v-on:click="createField('TextField')">Text</button>
            <button v-on:click="createField('TextAreaField')">Textarea</button>
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

<style>
.tool_box { 
    position: fixed;
    z-index: 1;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: lightgrey;
}
</style>