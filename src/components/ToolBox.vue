<template>
    <div>
        <div class="tool_box">
            <TextFieldTool v-on:createTextField="createField" />
            <button>Textarea</button>
        </div>
    </div>
</template>

<script>
import TextFieldTool from './TextFieldTool';

export default {
    name: 'ToolBox',
    components: {
        TextFieldTool
    },
    methods: {
        createField(field) {
            this.$emit('create-field', field);
        }
    }
}
</script>

<style>
.tool_box {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    border: 1px solid black;
    background-color: blue;
}
</style>