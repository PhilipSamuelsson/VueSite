<script setup></script>
<template>
    <div class="hero-image">
        <img src="../assets/HeroImage.jpg" alt="Beach" />
        <div class="hero-text">
            Help us save our planet
            <button type="button" class="btn btn-primary">Placeholder!</button>
        </div>
    </div>
</template>

<style scoped>
    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        filter: brightness(80%);
    }
    .hero-text {
        position: absolute;
        top: 25%;
        left: 10%;
        color: white;
        font-size: 4rem;
        text-decoration: underline;
        font-weight: 700;
    }

    button {
        position: absolute;
        top: 150%;
        left: 40%;
        font-size: 2rem;
        font-weight: 500;
        border: 2px solid white;
    }
</style>
