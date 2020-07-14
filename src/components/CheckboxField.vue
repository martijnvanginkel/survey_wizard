<template>
    <div>
        <h1>checkbox</h1>
        <div v-bind:key="box.id" v-for="box in boxes">
            <Checkbox v-bind:box="box"/>
        </div>
        <button v-on:click="addBox" type="button" class="icon-button">
            <font-awesome-icon icon="plus" />
        </button>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid'; 
import Checkbox from './Checkbox';

export default {
    name: 'CheckboxField',
    components: {
        Checkbox
    },
    methods: {
        addBox() {
            const box = {
                id: uuid.v4(),
                value: 'Option'
            }
            this.boxes = [...this.boxes, box];
        }
    },
    data() {
        return {
            boxes: [

            ]
        }
    }
}
</script>

<style scoped>

</style>