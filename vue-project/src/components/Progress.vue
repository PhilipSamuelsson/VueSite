<script>
    export default {
        data() {
            return {
                donateAmount: 75
            }
        },
        computed: {
            totalAmount() {
                this.donateAmount = this.donateAmount + 5
            }
        }
    }
</script>

<template>
    <div class="container">
        <h3>Donate to save the planet</h3>
        <br />
        <br />
        <p>Current amount: ${{ donateAmount }}</p>
        <div class="progress">
            <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ width: donateAmount + '%' }"
            ></div>
        </div>
        <button @click="totalAmount" class="btn btn-primary">Donate $5</button>
    </div>
</template>

<style scoped>
    .container {
        border: 3px solid black;
        height: 400px;
    }
    button {
        margin-top: 200px;
    }
</style>
