<template>
    <div>
        <h3>Survey</h3>
        <div v-bind:key="field.id" v-for="field in fields">
            <component v-bind:is="field"></component>
        </div>
    </div>
</template>

<script>
import TextField from './TextField';
import TextAreaField from './TextAreaField';

export default {
    name: 'Survey',
    components: {
        TextField,
        TextAreaField
    },
    props: ['fields']
}
</script>

<style>

</style>