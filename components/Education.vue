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
            ['I took frontend development courses, during which I studied JavaScript, VueJS, VueX, Vue router, GulpJS and Nuxt, got acquainted with the basic principles and methodologies of site interface development.',
            'I also studied the SASS / SCSS preprocessor, the Express framework, the MongoDB database, Mongoose, Soсket.io, Nest, Postgres.',
            "Now I'm studying Docker, I'm still studying Nest and Postgress, Nuxt, Socket.io."] : 
            ['Курси по front end розробці, в ході яких вивчав HTML 5, CSS 3, Java Script, навчився працювати з Git / Git Hub, вивчив основні принципи розробки сайтів на Vue JS з використанням технологій Vue Router та Vue X',
            'Крім курсів також самостійно вивчав фреймворк Nuxt.js, препроцесор SASS, додаток Figma linux, навчився користуватись AOS.',
            'Зараз вивчаю і активно розвиваюсь в таких технологіях як Socket.io, Express.js, Mongo DB, продовжую вивчати Nuxt JS і SSR, поглиблюю свої знання в SASS та Java Script.']
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