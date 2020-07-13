<template>
    <div>
        <FieldHeader v-on="$listeners" v-bind:field="field"/>
        <div class="question-input">
            <input type="text" placeholder="Question" class="question" spellcheck="false">
            <p class="text-field-example">Short answer</p>
            <hr class="dotted-line" />
        </div>
    </div>
</template>

<script>
import FieldHeader from './FieldHeader';

export default {
    name: 'TextField',
    components: {
        FieldHeader
    },
    props: ['field']
}
</script>

<style>

.question-header {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ffe8e7;
}

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

.question:focus {
    margin-bottom: 14px;
    border-bottom: 2px solid black;
    transition: 200ms;
}

.text-field-example {
    max-width: 60%;
    color: lightgray;
    user-select: none;
}

.dotted-line {
    border: 1px dotted lightgray; 
    border-style: none none dotted;
    max-width: 70%;
    margin-left: 0;
}

</style>