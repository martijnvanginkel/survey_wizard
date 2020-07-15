<template>
    <div>
        <div>
            <label for="start"></label>
            <select v-model="start_value" name="start">
                <option v-for="i in 2" :key="i">
                    {{ i - 1 }}
                </option>
            </select>
            <span class="till">till</span>
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
                <input type="text" placeholder="Small" spellcheck="false">
            </div>
            <div class="scale-value">
                <span>{{ end_value }}</span>
                <input type="text" placeholder="Big" spellcheck="false">
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
select {
    border: 0;
    outline: 0;
    padding: 10px;
}

.till {
    font-size: 0.8em;
    margin: 0 5px 0 10px;
    text-align: center;
}

.scale-values {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}

 .scale-value {
    display: flex;
    flex-direction: column;
 }

 .scale-value span {
    font-size: 0.8em;
    margin-bottom: 2px;
 }

.scale-value input[type="text"] {
    border: 0;
    outline: 0;
    padding-bottom: 1px;
    font-size: 0.9em;
}

.scale-value input[type="text"]:focus {
    border-bottom: 1px solid #d3a3a2;
    padding-bottom: 0px;
}
</style>