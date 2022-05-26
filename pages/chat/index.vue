<template>
    <div :class="chat_class" :style="{height: `calc(100vh - ${header_height}px)`}">
        <div class="main_info" v-if="user!={}">
            <h1 class="name">{{ user.name }}</h1>
            <div class="show_users" @click="change_users_list_class()" v-if="all_users.length>=1"><span>All Users</span></div>
            <div class="to_all_height" @click="change_chat_class_click()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" v-if="chat_class=='chat'"><path d="M21.414 18.586l2.586-2.586v8h-8l2.586-2.586-5.172-5.172 2.828-2.828 5.172 5.172zm-13.656-8l2.828-2.828-5.172-5.172 2.586-2.586h-8v8l2.586-2.586 5.172 5.172zm10.828-8l-2.586-2.586h8v8l-2.586-2.586-5.172 5.172-2.828-2.828 5.172-5.172zm-8 13.656l-2.828-2.828-5.172 5.172-2.586-2.586v8h8l-2.586-2.586 5.172-5.172z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" v-else><path d="M14 3h3l-5 5-5-5h3v-3h4v3zm-4 18h-3l5-5 5 5h-3v3h-4v-3zm-7-11v-3l5 5-5 5v-3h-3v-4h3zm18 4v3l-5-5 5-5v3h3v4h-3z"/></svg>
            </div>
        </div>

        <div :class="users_list_class" v-if="all_users.length>=1">
            <div class="user" v-for="(el, i) in all_users" :key="i" @click="setChatId(el)">
                <p class="name">{{ el.name }}</p>
            </div>
        </div>

        <div class="messages" v-if="chat_id">
            <div v-for="(el, i) in messages" :key="i" :class="message_class(el.name)">
                <div class="blok">
                    <p class="name">{{ el.name }}</p>
                    <p class="text">{{ el.text }}</p>
                    <p class="time">{{ el.time }}</p>
                </div>
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
    layout:'chat',
    data(){
        return{
            user:{},
            all_users:[],
            chat_id:false,
            active_user_id:false,
            message_text:'',
            messages:[],
            header_height:0,
            chat_class:'chat',
            users_list_class:'users_list'
        }
    },
    methods:{
        setChatId(user){
            if (user) {
                this.chat_id = user.id
                this.active_user_id = user._id
                socket.emit('getMessages', ({user:this.user, chat_id:user.id}))
                this.change_users_list_class()
            }
        },
        sendMessage(){
            if (this.chat_id && this.message_text!='') {
                let message = {name:this.user.name, text:this.message_text}
                socket.emit('message', {mess:message, chat_id:this.chat_id, user_id:this.user._id})
                this.message_text = ''
            }
        },
        message_class(name){
            return name == this.user.name ? 'message' : 'message friend'
        },
        async change_chat_class(){
            await this.chat_class == 'chat' ? this.chat_class = 'chat all_height' : this.chat_class = 'chat'
            window.scrollTo(0, 1)
        },
        async change_chat_class_click(){
            await this.change_chat_class()
            this.scroll_to_bottom()
        },
        scroll_to_bottom(){
            let messages = document.querySelector('.messages')
            if (messages) {
                messages.scrollTo(0, messages.scrollHeight)
            }
        },
        setMess(el){
            this.messages = el
        },
        change_users_list_class(){
            this.users_list_class == 'users_list' ? this.users_list_class = 'users_list active' : this.users_list_class = 'users_list'
        }
    },
    
    mounted(){
        socket.off('checkLog')
        this.header_height = document.querySelector('header').clientHeight
        let user = localStorage.getItem('user') || false
        if (user) {
            socket.on('checkLog', (log_user)=>{
                if (!log_user) {
                    this.$router.push('/chat/login')
                } else {
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

                    socket.on('getMessages', async (mess)=>{
                        await this.setMess(mess.messages)
                        this.scroll_to_bottom()
                    })

                    socket.on('newIvanId', (new_ivan_id)=>{
                        this.chat_id = new_ivan_id
                        socket.emit('getMessages', ({user:this.user, chat_id:this.chat_id}))
                    })

                    socket.on('message', async (mess)=>{
                        await this.messages.push(mess)
                        this.scroll_to_bottom()
                    })
                }
            })

            user = JSON.parse(user)
            socket.emit('checkLog', (user._id))
        } else {
            this.$router.push('/chat/login')
        }
        setTimeout(() => {
            window.scrollTo(0, 1)
        }, 100);
    }
}
</script>