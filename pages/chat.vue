<template>
    <div class="chat">
        <ComingSoon :page_name='"Chat"'/>
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