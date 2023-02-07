<script setup>
    import axios from 'axios'
</script>

<script>
    export default {
        data() {
            return {
                beaches: []
            }
        },
        methods: {
            fetchData() {
                axios.get('beaches.json').then((resp) => {
                    this.beaches = resp.data
                    console.log(this.beaches)
                })
            }
        },
        mounted() {
            this.fetchData()
        }
    }
</script>

<template>
    <div tableContainer>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" @click="fetchData">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Progress</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="beach in beaches">
                    <th scope="row">{{ beach.id }}</th>
                    <td>{{ beach.name }}</td>
                    <td>{{ beach.progress }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
    .tableContainer {
        width: 80%;
        justify-content: center;
        height: auto;
        display: flex;
    }

    .table {
        justify-content: center;
        width: 80%;
    }
</style>
