<template>
    <div class="education" id="education">
        <h2 class="title">Education</h2>
        <div class="text_blok">
            <p v-for="(el, i) in education_text" :key="i" class="common_text">{{el}}</p>
        </div>

        <div class="lang common_text">
            <p v-for="(el, i) in all_leanguage" :key="i" :class="el.class" @click="change_leanguage(el.name)">{{el.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            leanguage:'EN',
            all_leanguage:[
                {
                    name:'EN',
                    class:'active'
                },{
                    name:'UA',
                    class:''
                }
            ]
        }
    },
    computed:{
        education_text(){
            return this.leanguage=='EN' ? 
            [`I studied HTML, CSS / SASS, JavaScript, Vue on my own, after which I took Frontend development courses.
            during which I consolidated his knowledge in the creation of sites, got acquainted in more detail with JavaScript and Vue, began
            use VueX and Vue Router.`,
            `After the courses, I continued to study JavaScript and Vue in more detail, and started working with Nuxt.`,
            `Having mastered Nuxt, I went on to study Backend development - at a basic level I understood Node, Express,
            MongoDB, tried to use Mongoose.  I also started working with Socket.io.`,
            `After dealing with Backend, I continued to study Frontend development - understood the architecture of Angular, began
            studying React, Redux, React Router, which, in fact, I still do.`,
            `I plan to start working with Next, Nest, Postgress.`] 
            : 
            [`Займався самостійним вивченням HTML, CSS/SASS, JavaScript, Vue, після чого пройшов курси Frontend розробки
            в ході яких закріпив свої знання у верстанні сайтів, більш детально познайомився з JavaScript і Vue, почав
            використовувати VueX і Vue Router.`,
            `Після курсів продовжив більш детально вивчати JavaScript і Vue, почав працювати з Nuxt.`,
            `Опанувавши Nuxt перейшов до вивчення Backend розробки - на базовому рівні розібрався з Node, Express,
            MongoDB, познайомився з Mongoose. Також почав працювати з Socket.io.`,
            `Розібравшись з Backend продовжив вивчення Frontend розробки - розібрався з архітектурою Angular, почав
            вивчати React, Redux, React Router, чим, власне, займаюсь і досі.`,
            `В планах почати працювати з Next, Nest, Postgress.`]
        }
    },
    methods:{
        change_leanguage(leanguage){
            this.leanguage = leanguage
            this.all_leanguage.forEach(el=>{
                el.class = ''
                if (el.name==leanguage) {
                    el.class='active'
                }
            })
        }
    }
}
</script>