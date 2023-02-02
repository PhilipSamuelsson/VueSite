<script setup></script>

<template>
    <div class="footer pt-5">
        <div class="links">
            <ul>
                <li><a href="#">More about us</a></li>
                <li><a href="#">White lotus</a></li>
                <li><a href="#">Our Staff</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .footer {
        width: 100%;
        height: 200px;
        margin-top: 200px;
        background-color: lightgray;
        text-align: center;
        justify-items: center;
    }
    .footer li a {
        text-decoration: none;
        justify-content: center;
        color: black;
        margin: 5px;
    }
    .footer li {
        list-style: none;
        font-size: 1.5rem;
    }

    .footer li a:hover {
        text-decoration: underline;
    }
</style>
