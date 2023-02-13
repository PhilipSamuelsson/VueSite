<template>
    <div>
        <hr />
        <input type="text" v-model="watcherValue" @input="" />
        <p>And this is a watcher value: {{ watcherValue }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                watcherValue: ''
            }
        },
        watch: {
            watcherValue(newValue, oldValue) {
                return newValue
            }
        }
    }
</script>

<style scoped></style>
