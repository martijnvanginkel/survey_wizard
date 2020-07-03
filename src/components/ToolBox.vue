<template>
    <div>
        <div class="tool_box">
            <button v-on:click="createField('TextField')">Text</button>
            <button v-on:click="createField('TextAreaField')">Textarea</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ToolBox',
    methods: {
        createField(type) {
            this.$emit('create-field', type);
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