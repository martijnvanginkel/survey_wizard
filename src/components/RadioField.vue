<template>
    <div>
        <!-- <input type="radio" id="male" name="gender" value="male">
        <label for="option">Male</label><br>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br>
        <input type="radio" id="other" name="gender" value="other">
        <label for="other">Other</label> -->
        <div v-bind:key="button.id" v-for="button in buttons">
            <RadioButton/>
        </div>

        <button v-on:click="addOption" type="button">Add</button>
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
        addOption() {
            const button = {
                id: uuid.v4(),
                name: ''
            }
            this.buttons = [...this.buttons, button];
        }
    }

}
</script>

<style scoped>

</style>