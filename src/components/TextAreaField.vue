<template>
    <div>
        <p class="long-answer">Long answer</p>
        <hr class="dotted-line" />
        <hr class="dotted-line" />
        <hr class="dotted-line" />
    </div>
</template>

<script>
import fieldMixin from './../mixins/fieldMixin';

export default {
    name: 'TextAreaField',
    props: ['field'],
    mixins: [fieldMixin]
}
</script>

<style>
.long-answer {
    max-width: 60%;
    color: lightgray;
    user-select: none;
}
</style>