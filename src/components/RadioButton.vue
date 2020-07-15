<template>
    <div v-on:mouseover="hovering=true" v-on:mouseleave="hovering=false" class="radio-option">
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

input[type="text"] {
    font-family: inherit;
    font-size: inherit;
    flex-grow: 1;
    font-size: 1em;
    padding: 2px;
    margin: 0;
    margin-right: 7px;
    border: 0;
    bottom: 0;
    align-self: center;
    background-color: lightgray;
}

input[type="radio"] {
    align-self: center;
    padding: 0;
    margin: 0;
    margin-right: 5px;
    outline: none;
}

label {
    font-size: 1em;
    flex-grow: 1;
    padding: 2px;
    margin: 0;
}

label:hover {
    cursor: text;
}

.radio-option {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-content: center;
    width: 100%;
    margin: 1px 0;
    padding-bottom: 3px;
}

.radio-option:hover {
    padding-bottom: 2px;
    border-bottom: 1px solid lightgray;
}

</style>