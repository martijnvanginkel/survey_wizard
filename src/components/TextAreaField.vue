<template>
    <div>
        <FieldHeader v-on="$listeners" v-bind:field="field"/>
        <div class="question-input">
            <input type="text" placeholder="Question" class="question" spellcheck="false">
            <p class="textarea-field-example">Long answer</p>
            <hr class="dotted-line" />
            <hr class="dotted-line" />
            <hr class="dotted-line" />
        </div>
    </div>
</template>

<script>
import FieldHeader from './FieldHeader';
import fieldMixin from './../mixins/fieldMixin';

export default {
    name: 'TextAreaField',
    components: {
        FieldHeader
    },
    props: ['field'],
    methods: {
        moveUp() {
            console.log(this.question)
            this.$emit('moveUp', this.field);
        }
    },
    data() {
        return {
            question: ''
        }
    },
    mixins: [fieldMixin]
}
</script>
<style>
.textarea-field-example {
    max-width: 60%;
    color: lightgray;
    /* border-bottom: 1px dotted lightgray; */
    user-select: none;
}
</style>