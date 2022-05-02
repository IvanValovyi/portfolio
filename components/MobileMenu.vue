<template>
    <div :class="['mobile_menu', anim_class]">
        <div class="profile">
            <span class="name">Ivan Valovyi</span>
            <p class="position">Frontend developer</p>
        </div>

        <nav>
            <ul class="main_links">
                <li @click="close()">
                    <a href="#education">Education</a>
                </li><li @click="close()">
                    <a href="#contacts">Contacts</a>
                </li><li @click="close()">
                    <a href="#technologies">Skills</a>
                </li><li @click="close()">
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </nav>

        <ul class="other_links">
            <li>
                <nuxt-link to="/living_examples">Living examples of works</nuxt-link>
            </li><li>
                <nuxt-link to="/order_site">Order a website</nuxt-link>
            </li><li>
                <nuxt-link to="/chata">Write me</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['anim_class'],
    methods:{
        close(){
            console.log('OK');
            this.$emit('change_show_menu')
        }
    }
}
</script>