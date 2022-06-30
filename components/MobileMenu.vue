<template>
    <div :class="['mobile_menu', anim_class]">
        <div class="profile">
            <span class="name">Ivan Valovyi</span>
            <p class="position">Frontend developer</p>
        </div>

        <nav>
            <ul class="main_links">
                <li @click="close()">
                    <nuxt-link to="/#education">Education</nuxt-link>
                </li><li @click="close()">
                    <nuxt-link to="/#contact">Contacts</nuxt-link>
                </li><li @click="close()">
                    <nuxt-link to="/#technologies">Skills</nuxt-link>
                </li><li @click="close()">
                    <nuxt-link to="/#projects">Projects</nuxt-link>
                </li>
            </ul>
        </nav>

        <ul class="other_links">
            <li @click="close()">
                <nuxt-link to="/living_examples">Living examples of works</nuxt-link>
            </li><li @click="close()">
                <nuxt-link to="/order_site">Order a website</nuxt-link>
            </li><li @click="close()">
                <nuxt-link to="/chat">Write me</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['anim_class'],
    methods:{
        close(){
            this.$emit('change_show_menu')
        }
    }
}
</script>