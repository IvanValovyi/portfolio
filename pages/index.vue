<template>
    <div>
        <Technologies/>
        <Education/>
        <Projects/>
        <Contact/>
    </div>
</template>

<script>
import Technologies from '../components/Technologies.vue'
import Education from '../components/Education.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

export default {
    components:{
        Technologies,
        Education,
        Projects,
        Contact
    }
}
</script>