<template>
    <div class="survey-container">
        <div class="survey">
            <div class="field-panel">
                <input class="survey-title" type="text" placeholder="Title" spellcheck="false">
                <input class="survey-description" type="text" placeholder="Description" spellcheck="false">
            </div>    
            <transition-group name="field-list">
                <div v-bind:key="field.id" v-for="field in orderFields" class="field-panel">
                    <FieldPanel v-bind:field="field"
                                v-on:delete-field="deleteField"
                                v-on:move-up="moveUp"
                                v-on:move-down="moveDown" />
                </div>
            </transition-group>
            <ShareButton/>
        </div>
        <ToolBox    v-on:create-field="createField"
                    v-bind:fields="fields"/>
    </div>
</template>

<script>
import ToolBox from './ToolBox';
import FieldPanel from './FieldPanel';
import ShareButton from './ShareButton';

export default {
    name: 'Survey',
    components: {
        ToolBox,
        FieldPanel,
        ShareButton
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
            for (let i = 0; i < this.fields.length; i++) {
                if (this.fields[i].id === target.id) this.fields.splice(i, 1);
            }
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
.field-panel {
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 15px 0;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
    transition: all 500ms;
}

.field-panel:focus-within {
    padding: 15px 15px 15px 12px;
    border-left: 4px solid #d3a3a2;
}

.survey-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 0 50px 15px;
    margin-bottom: 30px;
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
    border-bottom: 1px solid lightgray;
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
    color: lightgray;
}

.field-list-enter,
.field-list-leave-to {
    position: absolute;
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
    right: 0;
    left: 0;
}
</style>