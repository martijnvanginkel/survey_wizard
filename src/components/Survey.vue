<template>
    <div>
        <h3>Survey</h3>
        <div v-bind:key="field.id" v-for="field in fields">
            <component  v-bind:is="field.component" 
                        v-bind:field="field"
                        v-on:delete-field="deleteField"
                        v-on:moveUp="moveUp">
            </component>
        </div>
        <ToolBox v-on:create-field="createField"/>
    </div>
</template>

<script>
import ToolBox from './ToolBox';
import TextField from './TextField';
import TextAreaField from './TextAreaField';

export default {
    name: 'Survey',
    components: {
        ToolBox,
        TextField,
        TextAreaField
    },
    data() {
        return {
            fields: []
        }
    },
    methods: {
        createField(field) {
            this.fields = [...this.fields, field];
        },
        deleteField(field_id) {
            this.fields = this.fields.filter(field => field.id !== field_id);
            // this.$emit('delete-field', field_id);
        },
        moveUp(field) {
            // console.log('moveup');
            this.$emit('moveUp', field);
        }
    }
}
</script>

<style>

</style>