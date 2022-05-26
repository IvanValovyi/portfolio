<template>
    <header>
        <div class="profile">
            <img src="~/assets/images/my_photo.png" alt="Face">
            <div class="info">
                <h1 class="name">Ivan Valovyi</h1>
                <p class="position">Frontend developer</p>
            </div>
        </div>

        <nav class="desctop">
            <ul class="main_links">
                <li>
                    <nuxt-link to="#education">Education</nuxt-link>
                </li><li>
                    <nuxt-link to="#contact">Contacts</nuxt-link>
                </li><li>
                    <nuxt-link to="#technologies">Skills</nuxt-link>
                </li><li>
                    <nuxt-link to="#projects">Projects</nuxt-link>
                </li>
            </ul>
        </nav>

        <ul class="other_links desctop">
            <li>
                <nuxt-link to="/living_examples">
                    <p>Living examples of works</p>
                    <div class="hover">
                        <svg>
                            <use xlink:href='~/assets/images/sprite.svg#living_ex'></use>
                        </svg>
                    </div>
                    </nuxt-link>
            </li><li>
                <nuxt-link to="/order_site">
                    <p>Order a website</p>
                    <div class="hover">
                        <svg>
                            <use xlink:href='~/assets/images/sprite.svg#order'></use>
                        </svg>
                    </div>
                </nuxt-link>
            </li><li>
                <nuxt-link to="/chat">
                    <p>Write me</p>
                    <div class="hover">
                        <svg>
                            <use xlink:href='~/assets/images/sprite.svg#chat'></use>
                        </svg>
                    </div>
                </nuxt-link>
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

        <MobileMenu :anim_class="anim_menu_class" @change_show_menu='change_show_menu'/>
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
                setTimeout(() => {
                    window.scrollTo(0, 1000)
                }, 100);
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