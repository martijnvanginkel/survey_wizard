<template>
    <div class="survey-container">
        <div class="survey">
            <div class="question-box">
                <input class="survey-title" type="text" placeholder="Title">
                <input class="survey-description" type="text" placeholder="Description">
            </div>    
            <transition-group name="field-list">
                <div v-bind:key="field.id" v-for="field in orderFields" class="field-list-panel">


                    <div class="question-box">
                        <FieldHeader v-on="$listeners" v-bind:field="field"/>
                        <div class="question-input">
                            <input type="text" placeholder="Question" class="question" spellcheck="false">
                            <component  v-bind:is="field.component" 
                                        v-bind:field="field"
                                        v-on:delete-field="deleteField"
                                        v-on:move-up="moveUp"
                                        v-on:move-down="moveDown">
                            </component>
                        </div>
                    </div>

                </div>
            </transition-group>
        </div>
        <ToolBox    v-on:create-field="createField"
                    v-bind:fields="fields"/>
    </div>
</template>

<script>
import ToolBox from './ToolBox';
import FieldHeader from './FieldHeader';
import TextField from './TextField';
import TextAreaField from './TextAreaField';

export default {
    name: 'Survey',
    components: {
        ToolBox,
        FieldHeader,
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
        deleteField(target) {
            this.fields.forEach((field) => {
               if (field.id === target.id) this.fields.splice(field, 1);
            });
            this.fields.forEach((field) => {
                if (field.order > target.order) field.order--;
            });
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


.question-header {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ffe8e7;
}

.question {
    color: black;
    background-color: #fff7f6;
    border: 0;
    border-bottom: 1px solid #d3a3a2;
    min-width: 60%;
    padding: 10px;
    margin-bottom: 15px;
    outline: none;
    transition: 200ms;
}

.question:hover {
    background-color: #ffe8e7;
    transition: 200ms;
}

.question:focus {
    margin-bottom: 14px;
    border-bottom: 2px solid black;
    transition: 200ms;
}



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
    /* position: absolute; */
    opacity: 0;
}

.field-list-enter {
    transform: translateY(-30px);
}

.field-list-leave-to {
    transform: translateY(-30px);
}

.field-list-leave-active {
    position: absolute;
    width: 100%;
}

.side-bar {
    background-color: red;
}

.survey-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.survey {
    position: relative;
    flex-grow: 1;
    max-width: 640px;
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

.question-box {
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 15px 0;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
}

.question-box:focus-within {
    padding-left: 12px;
    border-left: 4px solid #d3a3a2;
    transition: 200ms ease;
}

</style>