<template>
    <div class="share-container">
        <p v-if="show_message">Copied!</p>
        <button v-on:click="showMessage" type="button" class="share-button">Share</button>
    </div>
</template>

<script>
export default {
    name: 'ShareButton',
    data() {
        return {
            show_message: false
        }
    },
    methods: {
        showMessage() {
            this.show_message = true;
            setTimeout(() => this.show_message = false, 2000);
        }
    }
}
</script>

<style scoped>
.share-container {
    position: fixed;
    bottom: 15px;
    right: 15px;
}

.share-button {
    transition: 200ms;
    margin: 0 auto;
    padding: 10px 25px;
    border: 0;
    border-bottom: 2px solid #ff7f7a;
    border-radius: 5px;
    color: #fffff2;
    font-size: 1em;
    letter-spacing: 1px;
    background-color: lightsalmon;
    outline: none;
}

.share-button:hover {
    transform: scale(1.1);
    transition: 500ms;
    cursor: pointer;
    background-color: #ff7f7a;
}

p {
    text-align: center;
    margin-bottom: 5px;
}
</style>