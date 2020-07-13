<template>
    <div class="question-header">
        <button v-on:click="moveUp"><font-awesome-icon icon="sort-amount-up" /></button>
        <button v-on:click="moveDown"><font-awesome-icon icon="sort-amount-down" /></button>
        <button v-on:click="deleteField">

            <font-awesome-icon icon="trash-alt" />
        </button>
    </div>
</template>

<script>
import fieldMixin from './../mixins/fieldMixin';

export default {
    name: 'FieldHeader',
    props: ['field'],
    mixins: [fieldMixin]
}
</script>

<style scoped>

</style>