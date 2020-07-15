<template>
    <div v-on:mouseover="hovering=true" v-on:mouseleave="hovering=false" class="click-to-edit">
        <button v-if="hovering" v-on:click="deleteBox" type="button" class="icon-button">
            <font-awesome-icon icon="trash" />
        </button>
        <input v-if="box.selected" v-focus:focus_arg v-model="box.value" v-on:blur="deselect" type="text" spellcheck="false">
        <label v-if="!box.selected" v-on:click="select">{{ box.value }}</label>
        <input type="checkbox" disabled>
    </div>
</template>

<script>
export default {
    name: 'CheckBox',
    props: ['box'],
    data() {
        return {
            hovering: false,
            focus_arg: this.box
        }
    },
    methods: {
        select() {
            // console.log('adsf')
            this.$emit('box-selected', this.box);
        },
        deselect() {
            this.box.selected = false;
        },
        deleteBox() {
            this.$emit('delete-box', this.box)
        }
    }
}
</script>

<style>

.click-to-edit {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-content: center;
    width: 95%;
    margin: 1px 0;
    padding-bottom: 3px;
}

.click-to-edit:hover {
    padding-bottom: 2px;
    border-bottom: 1px solid lightgray;
}

.click-to-edit input[type="text"] {
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
    background-color: #ffe8e7;
}

.click-to-edit input[type="radio"], input[type="checkbox"] {
    align-self: center;
    padding: 0;
    margin: 0;
    margin-right: 5px;
    outline: none;
}

.click-to-edit label {
    font-size: 1em;
    flex-grow: 1;
    padding: 2px;
    margin: 0;
    transition: 200ms;
}

.click-to-edit label:hover {
    cursor: text;
    transition: 200ms;
}

/* .checkbox-option {
    background-color: lightgreen;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
}

label {
    flex-grow: 1;
    font-size: 1em;
    margin: 0;
    padding: 0;
}

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
    background-color: #ffe8e7;
} 

*/

</style>