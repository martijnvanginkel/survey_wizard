<template>
    <div>                
        <FieldHeader v-on="$listeners" v-bind:field="field"/>
        <input type="text" placeholder="Question" class="question" spellcheck="false">
        <component  v-bind:is="field.component"></component>
    </div>
</template>

<script>
import FieldHeader from './FieldHeader';
import TextField from './TextField';
import TextAreaField from './TextAreaField';
import RadioField from './RadioField';

export default {
    name: 'FieldPanel',
    components: {
        FieldHeader,
        TextField,
        TextAreaField,
        RadioField
    },
    props: ['field']
}
</script>

<style>
.question {
    color: black;
    background-color: #fff7f6;
    border: 0;
    border-bottom: 1px solid #d3a3a2;
    min-width: 60%;
    padding: 10px;
    margin-bottom: 15px;
    outline: none;
    transition: 200ms;
}

.question:hover {
    background-color: #ffe8e7;
    transition: 200ms;
}

/* .question:focus {
    margin-bottom: 14px;
    border-bottom: 2px solid black;
    transition: 200ms;
} */
</style>