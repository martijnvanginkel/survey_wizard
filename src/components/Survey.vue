<template>
    <div>
        <h3>Survey</h3>
        <div v-bind:key="field.id" v-for="field in fields">
            <!-- <h3>field</h3> -->
            <!-- <component
                :is="type == 'EmailMessage' ? 'email-queue-item' : 'queue-item'"
                v-for="item in queue"
                :key="item.id"
                :item="item"
            /> -->
            <component v-bind:is="TextField"></component>

        </div>
        <!-- <TextField /> -->
        <component v-bind:is="TextField"></component>
    </div>
</template>

<script>
import TextField from './TextField';

export default {
    name: 'Survey',
    components: {
        TextField
    },
    props: ['fields'],
    data() {
        return {
            TextField
        }
    }
}
</script>

<style>

</style>