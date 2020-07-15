<template>
    <div>
        <div class="time-field">
            <p>Date</p>
            <font-awesome-icon class="calendar-icon" icon="calendar-day" />
        </div>
        <hr class="dotted-line">
    </div>
</template>

<script>
export default {
    name: 'DateField'
}
</script>

<style scoped>
.calendar-icon {
    color: lightgray;
}
</style>