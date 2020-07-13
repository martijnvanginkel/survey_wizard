<template>
    <div class="radio-option">
        <!-- <h1>hoi</h1> -->
        <label v-on:click="selectOption" for="">Option</label>
        <input type="radio" disabled>
    </div>
</template>

<script>
export default {
    name: 'RadioButton',
    methods: {
        selectOption() {
            
        }
    }
}
</script>

<style>
.radio-option {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
}

label {
    padding-bottom: 1px;
    width: 100%;
}

label:hover {
    padding-bottom: 0px;
    border-bottom: 1px solid lightgray;
    cursor: auto;
}
</style>