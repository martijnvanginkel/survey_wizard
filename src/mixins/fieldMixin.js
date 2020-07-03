export default {
    methods: {
        deleteField() {
            this.$emit('delete-field', this.field.id);
        }
    }
}