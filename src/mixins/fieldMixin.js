export default {
    methods: {
        deleteField() {
            this.$emit('delete-field', this.field);
        },
        moveUp() {
            this.$emit('move-up', this.field);
        },
        moveDown() {
            this.$emit('move-down', this.field);
        }
    }
}