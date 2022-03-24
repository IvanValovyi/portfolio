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
                    <nuxt-link to="/about">About</nuxt-link>
                </li><li>
                    <nuxt-link to="/about">Contacts</nuxt-link>
                </li><li>
                    <nuxt-link to="/about">Skills</nuxt-link>
                </li><li>
                    <nuxt-link to="/about">Projects</nuxt-link>
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

        <button :class="['mobile_nav_btn', anim_btn_class]" @click="change_show_menu()">

            <svg v-if="anim_btn_class.length == 1">
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
            anim_btn_class:[],
            anim_menu_class:''
        }
    },
    methods:{
        change_show_menu(){
            if (this.anim_menu_class=='') {
                this.anim_menu_class='anim'
                this.anim_btn_class=['anim', 'anim_btn']
                setTimeout(() => {
                    this.anim_btn_class.pop()
                }, 500)
            } else {
                this.anim_menu_class=''
                this.anim_btn_class=['anim_btn']
                setTimeout(() => {
                    this.anim_btn_class = []
                }, 500)
            }
        }
    }
}
</script>