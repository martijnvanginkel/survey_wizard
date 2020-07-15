<template>
    <div>
        <div class="checkboxes">
            <div v-bind:key="box.id" v-for="box in boxes" class="checkbox">
                <CheckBox v-on:box-selected="boxSelected" v-on:delete-box="deleteBox" v-bind:box="box"/>
            </div>
        </div>
        <button v-on:click="addBox" type="button" class="icon-button">
            <font-awesome-icon icon="plus" />
        </button>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid'; 
import CheckBox from './CheckBox';

export default {
    name: 'CheckBoxField',
    components: {
        CheckBox
    },
    methods: {
        addBox() {
            const box = {
                id: uuid.v4(),
                selected: false,
                value: 'Option'
            }
            this.boxes = [...this.boxes, box];
        },
        deleteBox(target) {
            this.boxes = this.boxes.filter(box => box.id !== target.id);
        },
        boxSelected(target) {
            this.boxes.forEach(box => {
                box.selected = false;
                if (box.id === target.id) {
                    box.selected = true;
                }
            })
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
.checkboxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.checkbox {
   flex-grow: 0;
   flex-shrink: 0;
   flex-basis: 50%;
   width: 100%;
}
</style>