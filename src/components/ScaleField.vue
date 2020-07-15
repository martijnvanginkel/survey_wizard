<template>
    <div>
        <div class="range-selection">
            <label for="start"></label>
            <select v-model="start_value" name="start">
                <option v-for="i in 2" :key="i">
                    {{ i - 1 }}
                </option>
            </select>
            <font-awesome-icon icon="slash" />
            <label for="end"></label>
            <select v-model="end_value" name="end">
                <option v-for="index in inline" :key="index">
                    {{ index }}
                </option>
            </select>    
        </div>
        <div class="scale-values">
            <div class="scale-value">
                <span>{{ start_value }}</span>
                <input type="text" class="scale-text" placeholder="Small">
            </div>
            <div class="scale-value">
                <span>{{ end_value }}</span>
                <input type="text" class="scale-text" placeholder="Big">
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScaleField',
    data() {
        return {
            start_value: 0,
            end_value: 10,
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    computed: {
        inline() {
            return this.values.filter((item) => {
                return item > this.start_value;
            })
        }
    }
}
</script>

<style scoped>
.scale-values {
    display: flex;
    flex-direction: column;
}

/* input[type="text"] {
 */

.scale-text {
    border: 0;
    outline: 0;
    padding-bottom: 1px;
}

.scale-text:focus {
    border-bottom: 1px solid blue;
    padding-bottom: 0px;
}

</style>