<template>
    <div v-on:mouseover="hovering=true" v-on:mouseleave="hovering=false" class="checkbox-option">
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

<style scoped>
.checkbox-option {
    background-color: lightgreen;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
}

label {
    flex-grow: 1;
}

input[type="text"] {
    flex-grow: 1;
}

</style>