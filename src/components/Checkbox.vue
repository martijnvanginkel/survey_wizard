<template>
    <div>
        <!-- <label v-bind="box.value" for="">{{ box.value }}</label> -->
        <input v-model="box.value" type="text" spellcheck="false">
        <label>{{ box.value }}</label>
    </div>
</template>

<script>
export default {
    name: 'Checkbox',
    props: ['box']
}
</script>

<style scoped>

</style>