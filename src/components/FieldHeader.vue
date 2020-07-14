<template>
    <div class="field-header">
        <button v-on:click="moveUp" class="icon-button"><font-awesome-icon icon="sort-amount-up" /></button>
        <button v-on:click="moveDown" class="icon-button"><font-awesome-icon icon="sort-amount-down" /></button>
        <button v-on:click="deleteField" class="icon-button"><font-awesome-icon icon="trash-alt" /></button>
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
.field-header {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ffe8e7;
}
</style>