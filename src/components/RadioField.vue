<template>
    <div>
        <FieldHeader v-on="$listeners" v-bind:field="field"/>
        <div class="question-input">
            <input type="text" placeholder="Question" class="question" spellcheck="false">
            <p class="text-field-example">Short answer</p>
            <hr class="dotted-line" />
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>