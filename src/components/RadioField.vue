<template>
    <div>
        <div v-bind:key="button.id" v-for="button in buttons">
            <RadioButton v-on:button-selected="buttonSelected" v-on:delete-button="deleteButton" v-bind:button="button"/>
        </div>
        <button v-on:click="addButton" type="button" class="icon-button">
            <font-awesome-icon icon="plus" />
        </button>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid'; 
import RadioButton from './RadioButton';

export default {
    name: 'RadioField',
    components: {
        RadioButton
    },
    data() {
        return {
            buttons: [

            ]
        }
    },
    methods: {
        addButton() {
            const button = {
                id: uuid.v4(),
                name: '',
                selected: false,
                value: 'Option'
            }
            this.buttons = [...this.buttons, button];
        },
        deleteButton(target) {
            this.buttons = this.buttons.filter(button => button.id !== target.id);
        },
        buttonSelected(target) {
            this.buttons.forEach(button => {
                button.selected = false;
                if (button.id === target.id) {
                    button.selected = true;
                    console.log(button);
                }
            });
        }
    }

}
</script>

<style scoped>

</style>