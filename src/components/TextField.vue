<template>
    <div>
        <div class="text_field">
            <label>Type: Text</label>
            <input type="text" placeholder="Question">
            <button v-on:click="deleteField">Delete</button>
        </div>
    </div>
</template>

<script>
import fieldMixin from './../mixins/fieldMixin';

export default {
    name: 'TextField',
    props: ['field'],
    mixins: [fieldMixin]
}
</script>

<style>
.text_field {
    background-color: lightcoral;
}
</style>