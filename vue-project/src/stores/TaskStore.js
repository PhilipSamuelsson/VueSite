import { createStore } from 'vuex'

const mutations = {
        increase(state) {
            state.counter += 1
        },
        decrease(state) {
            state.counter -= 1
        }
    },
    state = {
        counter: 0
    }

export default createStore({ mutations, state, strict: true }) 
