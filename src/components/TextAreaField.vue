<template>
    <div>
        <div class="text_area_field">
            <label>Type: Textarea</label>
            <textarea v-model="question"></textarea>
            <button v-on:click="deleteField">Delete</button>
            <button v-on:click="moveUp">Move up</button>
        </div>
    </div>
</template>

<script>
import fieldMixin from './../mixins/fieldMixin';

export default {
    name: 'TextAreaField',
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

</style>