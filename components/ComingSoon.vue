<template>
    <div class="coming_soon">
        <h1>Coming Soon</h1>
        <p>The {{ page_name }} page is under development.</p>
        <nuxt-link to="/">To Main Page</nuxt-link>
    </div>
</template>

<script>
export default {
    props:['page_name']
}
</script>