<script setup></script>

<script>
    export default {
        props: {
            title: String,
            content: String
        }
    }
</script>

<template>
    <div class="row d-flex justify-content-center">
        <div class="col-sm-3 mb-3 mb-sm-0 m-4">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="card-text">{{ content }}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
