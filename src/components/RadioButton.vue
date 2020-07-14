<template>
    <div v-on:mouseover="hovering=true" v-on:mouseleave="hovering=false" class="radio-option">
        <button v-if="hovering" v-on:click="deleteButton" type="button" class="icon-button">
            <font-awesome-icon icon="trash" />
        </button>
        <input v-if="button.selected" v-focus v-model="button.value" v-on:blur="deselect" type="text">
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
            hovering: false
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
    },
    directives: {
        focus: {
            inserted: function(el, binding, vnode) {
                el.addEventListener('keydown', (e) => {
                    if (e.keyCode === 13) {
                        vnode.context.button.selected = false;
                    }
                });
                el.focus();
            }     
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
    padding: 0;
    margin: 0;
    border: 0;
    bottom: 0;
    background-color: orange;
    align-self: center;
}

input[type="radio"] {
    align-self: center;
    padding: 0;
    margin: 0;
    outline: none;
}

label {
    font-size: 1em;
    flex-grow: 1;
    padding: 0;
    margin: 0;
}

.radio-option {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-content: center;
    width: 100%;
}

.radio-option:hover {
    /* padding-bottom: 0px;
    border-bottom: 1px solid lightgray;
    cursor: auto; */
}

/* label {
    padding-bottom: 1px;
    width: 100%;
}

label:hover {
    padding-bottom: 0px;
    border-bottom: 1px solid lightgray;
    cursor: auto;
} */
</style>