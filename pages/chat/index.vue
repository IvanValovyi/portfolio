<template>
    <div class="chat">
        <div class="main_info" v-if="user!={}">
            <h1 class="name">{{ user.name }}</h1>
        </div>

        <div class="users">
            <div class="user" v-for="(el, i) in all_users" :key="i">
                <p class="name" @click="setChatId(el)">{{ el.name }}</p>
            </div>
        </div>
        <div class="messsages" v-if="chat_id">
            <div class="message" v-for="(el, i) in messages" :key="i">
                <b class="name">{{ el.name }}</b>
                <i class="text">{{ el.text }}</i>
            </div>
        </div>
        <div class="messages_form" v-if="chat_id">
            <input type="text" placeholder="Type some message..." v-model="message_text">
            <button class="send" @click="sendMessage()">SEND</button>
        </div>
    </div>
</template>

<script>
import socket from '../../plugins/socket.io'

export default {
    data(){
        return{
            user:{},
            all_users:[],
            chat_id:false,
            active_user_id:false,
            message_text:'',
            messages:[]
        }
    },
    methods:{
        setChatId(user){
            if (user) {
                this.chat_id = user.id
                this.active_user_id = user._id
                socket.emit('getMessages', ({user:this.user, chat_id:user.id}))
            }
        },
        sendMessage(){
            if (this.chat_id && this.message_text!='') {
                let message = {name:this.user.name, text:this.message_text}
                socket.emit('message', {mess:message, chat_id:this.chat_id, user_id:this.user._id})
            }
            console.log(this.chat_id)
        }
    },
    mounted(){
        let user = localStorage.getItem('user') || false
        if (user) {
            user = JSON.parse(user)
            socket.emit('checkLog', (user._id))

            socket.on('checkLog', (log_user)=>{
                if (log_user) {
                    this.user = log_user
                    socket.on('allUsers', data=>{
                        if (data && data.length != 0) {
                            this.all_users = data
                            
                        }
                    })

                    socket.on('newUser', (user)=>{
                        if (user) {
                            this.all_users.forEach(el=>{
                                if (el._id == user._id) {
                                    this.all_users.splice(this.all_users.indexOf(el))
                                }
                            })
                            if (this.user._id != user._id) {
                                this.all_users.push(user)
                                if (user._id == this.active_user_id) {
                                    this.chat_id = user.id
                                }
                            }
                        }
                    })

                    socket.on('getMessages', (mess)=>{
                        this.messages = mess.messages
                    })

                    socket.on('newIvanId', (new_ivan_id)=>{
                        this.chat_id = new_ivan_id
                        socket.emit('getMessages', ({user:this.user, chat_id:this.chat_id}))
                    })

                    socket.on('message', (message)=>{
                        if (message) {
                            this.messages.push(message)
                        }
                    })
                } else {
                    console.log('Login failed.');
                    this.$router.push('/chat/login')
                }
            })
        } else {
            this.$router.push('/chat/login')
        }
    }
}
</script>