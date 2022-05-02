<template>
    <div class="order_blok">
        <ComingSoon :page_name='"Order Site"'/>
    </div>
</template>

<script>
import ComingSoon from '../components/ComingSoon.vue'

export default {
    components:{
        ComingSoon
    },
    layout:'coming_soon'
}
</script>