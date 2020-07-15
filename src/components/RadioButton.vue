<template>
    <div v-on:mouseover="hovering=true" v-on:mouseleave="hovering=false" class="click-to-edit">
        <button v-if="hovering" v-on:click="deleteButton" type="button" class="icon-button">
            <font-awesome-icon icon="trash" />
        </button>
        <input v-if="button.selected" v-focus:focus_arg v-model="button.value" v-on:blur="deselect" type="text" spellcheck="false">
        <label v-if="!button.selected" v-on:click="select">{{ button.value }}</label>
        <input type="radio" disabled>
    </div>
</template>

<script>
export default {
    name: 'RadioButton',
    props: ['button'],
    data() {
        return {
            hovering: false,
            focus_arg: this.button
        }
    },
    methods: {
        select() {
            this.$emit('button-selected', this.button);
        },
        deselect() {
            this.button.selected = false;
        },
        deleteButton() {
            this.$emit('delete-button', this.button)
        }
    }
}
</script>

<style scoped>

</style>