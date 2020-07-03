<template>
    <div>
        <h3>Survey</h3>
        <div v-bind:key="field.id" v-for="field in fields">
            <component  v-bind:is="field.component" 
                        v-bind:field="field"
                        v-on:delete-field="deleteField"
                        v-on:moveUp="moveUp"
            >
            </component>
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
    methods: {
        deleteField(field_id) {
            this.$emit('delete-field', field_id);
        },
        moveUp(field) {
            // console.log('moveup');
            this.$emit('moveUp', field);
        }
    },
    props: ['fields']
}
</script>

<style>

</style>