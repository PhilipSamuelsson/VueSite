<script setup>
    import NavBar from '../components/NavBar.vue'
    import Watcher from '../components/Watcher.vue'
</script>

<script></script>

<template>
    <NavBar></NavBar>
    <div>
        <h1>Counter App</h1>
        <h1>{{ $store.state.counter }}</h1>
        <input type="button" value="+" @click="$store.commit('increase')" />
        <input type="button" value="-" @click="$store.commit('decrease')" />
    </div>
    <div>
        <p>
            This is an address parameter: <b> {{ $route.params.id }}</b>
        </p>
    </div>
    <Watcher></Watcher>
</template>

<style scoped>
    div {
        text-align: center;
        margin-top: 100px;
    }
    input {
        margin: 20px;
        font-size: 2rem;
        width: 50px;
        justify-content: center;
        text-align: center;
        padding: 0;
    }
</style>
