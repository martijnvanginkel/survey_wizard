<template>
    <div>
        <p class="short-answer">Short answer</p>
        <hr class="dotted-line" />
    </div>
</template>

<script>

export default {
    name: 'TextField'
}
</script>

<style>

.short-answer {
    max-width: 60%;
    color: lightgray;
    user-select: none;
}

.dotted-line {
    height: 1px;
    border: 1px dotted lightgray; 
    border-style: none none dotted;
    max-width: 70%;
    margin-left: 0;
}

</style>