<script setup>
    import NavBar from '../components/NavBar.vue'
    import HeroImage from '../components/HeroImage.vue'
    import Card from '../components/Card.vue'
    import Footer from '../components/Footer.vue'
    import Form from '../components/Form.vue'
</script>

<template>
    <NavBar></NavBar>
    <HeroImage></HeroImage>
    <Card
        title="A Props Title"
        content="I am her placeholder
the one you go to when she is consumed with her chemistry or taking care of her roommates dog
the one you lean on when you and her are at each others throats"
    ></Card>
    <h2>{{ message }}</h2>
    <div class="formSection">
        <Form @inputValue="test"></Form>
    </div>
    <Footer></Footer>
</template>

<style>
    .formSection {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 50px;
        border: 2px solid black;
    }
    h2 {
        text-align: center;
        width: 200px;
        height: 100px;
        margin: 0 auto;
        margin-top: 100px;
    }

    Form {
        margin-top: 50px;
    }

    .blankLetter {
        background-color: black;
        width: 40%;
        height: 500px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        border-radius: 10px;
        color: white;
    }

    .bestRegard {
        text-align: right;
        width: 100px;
        height: 50px;
        padding-right: 10px;
        padding-top: 50px;
    }
</style>

<script>
    export default {
        data() {
            return {
                message: 'Contact us',
                inputName: '',
                inputValue: ''
            }
        },
        // Not finished ****************************
        methods: {
            test(value) {
                this.inputName = value
            }
        }
    }
</script>
