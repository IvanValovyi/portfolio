<template>
    <div :class="['mobile_menu', anim_class]">
        <div class="profile">
            <span class="name">Ivan Valovyi</span>
            <p class="position">Frontend developer</p>
        </div>

        <nav>
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

        <ul class="other_links">
            <li>
                <a href="#">Living examples of works</a>
            </li><li>
                <a href="#">Order a website</a>
            </li><li>
                <a href="#">Write me</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['anim_class']
}
</script>