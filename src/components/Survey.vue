<template>
    <div class="survey-container">
        <div class="survey">
            <div class="question-box">
                <input class="survey-title" type="text" placeholder="Title">
                <input class="survey-description" type="text" placeholder="Description">
            </div>    
            <transition-group name="field-list">
                <div v-bind:key="field.id" v-for="field in orderFields" class="field-list-panel">
                    <component  v-bind:is="field.component" 
                                v-bind:field="field"
                                v-on:delete-field="deleteField"
                                v-on:move-up="moveUp"
                                v-on:move-down="moveDown">
                    </component>
                </div>
            </transition-group>
        </div>
        <ToolBox    v-on:create-field="createField"
                    v-bind:fields="fields"/>
    </div>
</template>

<script>
import ToolBox from './ToolBox';
import TextField from './TextField';
import TextAreaField from './TextAreaField';

export default {
    name: 'Survey',
    components: {
        ToolBox,
        TextField,
        TextAreaField
    },
    data() {
        return {
            fields: [

            ]
        }
    },
    computed: {
        orderFields() {
            const compare = (a, b) => {
                if (a.order < b.order) return -1;
                if (a.order > b.order) return 1;
                return 0;
            }
            const temp = this.fields;
            return temp.sort(compare);         
        }
    },
    methods: {
        createField(new_field) {
            this.fields = [...this.fields, new_field];
        },
        deleteField(field) {
            for (const key in this.fields) {
                if (this.fields[key].id === field.id) {
                    this.fields.splice(key, 1);
                }
                else if (this.fields[key].order > field.order) {
                    this.fields[key].order--;
                }
            }
        },
        moveUp(field) {
            if (field.order === 0) return;
            for (let i = 0; i < this.fields.length; i++) {
                if (this.fields[i].id === field.id) {
                    this.fields[i].order--;
                    this.fields[i - 1].order++;
                }
            }
        },
        moveDown(field) {
            if (field.order === this.fields.length - 1) return;
            for (let i = 0; i < this.fields.length; i++) {
                if (this.fields[i].id === field.id) {
                    this.fields[i].order++;
                    this.fields[i + 1].order--;
                }
            }
        }
    }
}
</script>

<style>

.colors {
    background-color: #d3a3a2;
    background-color: #e2b0af;
    background-color: #f0bebd;
    background-color: #ffcccb;
    background-color: #ffdad9;
    background-color: #ffe8e7;
    background-color: #fff7f6;
}

.field-list-panel {
    display: flex;
    flex-direction: column;
    transition: all 500ms;
}

.field-list-enter,
.field-list-leave-to {
  opacity: 0;
}

.field-list-enter {
  transform: translateY(-30px);
}

.field-list-leave-to {
  transform: translateY(-30px);
}

.field-list-leave-active {
    width: 100%;    
  position: absolute;
}

.side-bar {
    background-color: red;
    /* position: sticky;
    top: 20%;
    height: 100%; */
}

.survey-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.survey {
    flex-grow: 1;
    max-width: 640px;
    background-color: blue;
}

.survey-title {
    font-size: 1.5em;
    margin-bottom: 15px;
}

.survey-title,
.survey-description {
    border: 0;
    border-bottom: 1px solid #f0bebd;
    padding-bottom: 5px;
    outline: none;
    transition: 200ms;
}

.survey-title:focus,
.survey-description:focus {
    padding-bottom: 4px;
    border-bottom: 2px solid #e2b0af;
    transition: 200ms;
}

.survey-title::placeholder,
.survey-description::placeholder {
    color: #f0bebd;
}

</style>