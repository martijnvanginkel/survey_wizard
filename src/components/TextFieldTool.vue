<template>
    <div>
        <button @click="createTextField" type="button">Text</button>
    </div>
</template>

<script>
import TextField from './TextField';

export default {
    name: 'TextFieldTool',
    methods: {
        createTextField() {
            this.$emit('createTextField', TextField);
        }
    }
}
</script>

<style>


</style>