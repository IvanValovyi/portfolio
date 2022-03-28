<template>
    <header>
        <div class="profile">
            <img src="~/assets/images/my_photo.jpg" alt="Face">
            <div class="info">
                <h1 class="name">Ivan Valovyi</h1>
                <p class="position">Frontend developer</p>
            </div>
        </div>

        <nav class="desctop">
            <ul class="main_links">
                <li>
                    <nuxt-link to="#">About</nuxt-link>
                </li><li>
                    <nuxt-link to="#">Contacts</nuxt-link>
                </li><li>
                    <nuxt-link to="#">Skills</nuxt-link>
                </li><li>
                    <nuxt-link to="#">Projects</nuxt-link>
                </li>
            </ul>
        </nav>

        <ul class="other_links desctop">
            <li>
                <a href="#">Living examples of works</a>
            </li><li>
                <a href="#">Order a website</a>
            </li><li>
                <a href="#">Write me</a>
            </li>
        </ul>

        <button :class="['mobile_nav_btn', anim_menu_class]" @click="change_show_menu()">
            <svg v-if="show_menu">
                <use xlink:href='~/assets/images/sprite.svg#close'></use>
            </svg>

            <svg v-else>
                <use xlink:href='~/assets/images/sprite.svg#open'></use>
            </svg>
        </button>

        <MobileMenu :anim_class="anim_menu_class"/>
    </header>
</template>

<script>
import MobileMenu from './MobileMenu.vue'

export default {
    components:{
        MobileMenu
    },
    data(){
        return{
            show_menu:false,
            anim_menu_class:[],
            body:'' 
        }
    },
    methods:{
        change_show_menu(){
            if (this.anim_menu_class.length==0) {
                this.anim_menu_class=['anim', 'anim_btn']
                setTimeout(() => {
                    if (this.anim_menu_class.length==2) {
                        this.show_menu = true
                        this.body.classList.add('hidden')
                        this.anim_menu_class.pop()
                    }
                }, 500)
            } else {
                this.anim_menu_class=['anim_btn']
                setTimeout(() => {
                    if (this.anim_menu_class.length==1) {
                        this.show_menu = false
                        this.body.classList.remove('hidden')
                        this.anim_menu_class = []
                    }
                }, 500)
            }
        }
    },
    mounted(){
        this.body = document.querySelector('body')
    }
}
</script>