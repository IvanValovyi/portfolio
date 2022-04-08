<template>
    <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="projects_list">
            <div v-for="(el, i) in projects" :key="i" :class="['project', el.class]">
                <div class="image" :style="{backgroundImage:`url(${el.img})`}"></div>
                <div class="info">
                    <div class="header">
                        <h3 class="subtitle">{{el.name}}</h3>
                        <p class="small_tetx">{{el.type}}</p>
                    </div>

                    <a :href="el.link" target="_blank" class="subtitle">Visit The Site</a>

                    <div class="technologies">
                        <p class="common_text">Technologies</p>
                        <div class="technologies_list">
                            <div v-for="(tech, tech_i) in el.technologies" :key="tech_i" :class="['one_tech', 'title', tech]">{{tech}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            projects:[
                {
                    name:'KMK Group',
                    type:'Landing page',
                    img:require('~/assets/images/kmk.png'),
                    technologies:['HTML', 'SASS', 'JS'],
                    link:'https://ivanvalovyi.github.io/kmk_test/'
                },{
                    name:'Jane Blog',
                    type:'Landing page',
                    img:require('~/assets/images/jane_blog.png'),
                    technologies:['HTML', 'SASS', 'JS'],
                    class:'reverse',
                    link:'https://ivanvalovyi.github.io/jane_blog/'
                },{
                    name:'Tour Cloud',
                    type:'Company site',
                    img:require('~/assets/images/tour_cloud.png'),
                    technologies:['HTML', 'SASS', 'JS'],
                    link:'https://ivanvalovyi.github.io/tour_cloud/home.html'
                }
            ]
        }
    }
}
</script>