<template>
    <div class="login">
        <input type="text" class="name_inp" placeholder="Enter your name here..." v-model="name_inp">
        <div class="error" v-if="is_err">Error !!!</div>
        <button class="send" @click="logIn()">SEND</button>
    </div>
</template>

<script>
import socket from '../../plugins/socket.io'

export default {
    data(){
        return{
            name_inp:'',
            is_err:false
        }
    },
    methods:{
        logIn(){
            if (this.name_inp!='') {
                socket.emit('logIn', this.name_inp)
            } else {
                this.is_err = true
            }
        }
    },
    mounted(){
        socket.on('checkLog', (log_user)=>{
            if (log_user) {
                this.$router.push('/chat')
            } else {
            this.is_err = true
        }
        })

        socket.on('logIn', el=>{
            if (el) {
                localStorage.setItem('user', JSON.stringify(el))
                this.$router.push('/chat')
            }
        })

        let user = localStorage.getItem('user') || false
        if (user) {
            user = JSON.parse(user)

            socket.emit('checkLog', user._id)
        }
    }
}
</script>