<script>
    export default {
        // not finished ********************
        data() {
            return {
                inputName: '',
                inputValue: ''
            }
        },
        emits: ['inputValue'],
        methods: {
            sendCustomEvent() {
                this.$emit('input-value', this.inputValue)
            }
        }
    }
</script>

<template>
    <div class="formContainer">
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1"> Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name"
                />
            </div>
            <div class="form-group"></div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                    v-model="inputValue"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
            </div>
            <button @click.prevent="sendCustomEvent" class="btn btn-primary">
                This button does not work
            </button>
        </form>
    </div>
    <div v-if="(inputValue === '') | (inputValue === null)" class="preview">
        Preview Window
    </div>
    <div v-else class="preview">{{ inputValue }}</div>
</template>
<style scoped>
    .form-group {
        background-color: rgba(0, 40, 200, 0.8);
        text-align: center;
        color: white;
        border-radius: 10px;
    }
    .formContainer {
        color: white;
        width: 50%;
        text-align: center;
        margin-bottom: 100px;
    }
    .preview {
        width: 50%;
        height: 220px;
        background-color: black;
        opacity: 95%;
        color: white;
        border-radius: 10px;
        padding-left: 20px;
        padding-top: 20px;
    }
    .btn {
        margin-top: 20px;
    }
</style>
