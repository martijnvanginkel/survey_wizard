<template>
    <div class="home-page">
        <div class="start-section">
            <font-awesome-icon icon="hat-wizard" class="wizard-hat"/>
            <p>Create forms like magic</p>
            <button v-on:click="startSurvey">start</button> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        startSurvey() {
            this.$emit('start-survey');
        }
    }
}
</script>

<style scoped>
.home-page {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
}

p {
    font-size: 1em;
    font-weight: 800;
    margin-bottom: 20px;
    color: #d3a3a2;
}

.start-section {
    position: relative;
    display: flex;
    flex-direction: column;
}

.wizard-hat {
  animation: MoveUpDown 1.25s linear infinite;
  margin: 0 auto 5px auto;
  font-size: 1.5em;
  color: #d3a3a2;
}

@keyframes MoveUpDown {
    0% {
        transform: translateY(-40%) rotate(30deg);
    }
    50% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-40%) rotate(30deg);
    }
}

button {
    transition: 200ms;
    margin: 0 auto;
    padding: 10px 25px;
    border: 0;
    border-bottom: 2px solid #ff7f7a;
    border-radius: 100px;
    color: #fffff2;
    font-size: 1em;
    letter-spacing: 1px;
    background-color: lightsalmon;
    outline: none;
}

button:hover {
    transform: scale(1.1);
    transition: 500ms;
    cursor: pointer;
    background-color: #ff7f7a;
}
</style>