<template>
    <div>
        <div class="time-field">
            <p>Time</p>
            <font-awesome-icon class="clock-icon" icon="clock" />
        </div>
        <hr class="dotted-line">
    </div>
</template>

<script>
export default {
    name: 'TimeField'
}
</script>

<style>
.time-field {
    display: flex;
    flex-direction: row;
}

.time-field p {
    max-width: 60%;
    color: lightgray;
    user-select: none;
    margin-right: 5px;
}

.clock-icon {
    color: lightgray;
}
</style>