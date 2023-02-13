<script>
    export default {
        methods: {
            sendCustomEvent(value) {
                this.$emit('update:option', this.selectedOption)
            }
        },
        data() {
            return {
                selectedOption: null
            }
        }
    }
</script>

<template>
    <select
        v-model="selectedOption"
        @change="sendCustomEvent"
        name="dropdown"
        id="dr
    opdown"
    >
        <option value="A first option">A first option</option>
        <option value="A second option">A second option</option>
        <option value="A third option">A third option</option>
    </select>
</template>

<style></style>
