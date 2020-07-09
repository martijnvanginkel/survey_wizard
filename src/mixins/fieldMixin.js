export default {
    methods: {
        deleteField() {
            this.$emit('delete-field', this.field.id);
        },
        moveUp() {
            this.$emit('move-up', this.field.id);
        }
    }
}