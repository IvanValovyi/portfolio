<template>
    <div class="login" :style="{height: `calc(100vh - ${header_height}px)`}">
        <div class="form">
            <h1>Chat Registration Form</h1>
            <input type="text" class="name_inp" placeholder="Enter your name here..." v-model="name_inp">
            <button class="send" @click="logIn()">Log In</button>
        </div>
    </div>
</template>

<script>
import socket from '../../plugins/socket.io'

export default {
    layout:'chat',
    data(){
        return{
            name_inp:'',
            is_err:false,
            header_height:0
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
        this.header_height = document.querySelector('header').clientHeight

        socket.on('checkLog', (log_user)=>{
            if (log_user) {
                this.$router.push('/chat')
            } else {
            this.is_err = true
            }
        })

        socket.on('logIn', async (el)=>{
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