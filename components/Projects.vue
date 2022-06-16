<template>
    <div class="projects" id="projects">
        <h2 class="title">Projects</h2>
        <div class="projects_list">
            <div v-for="(el, i) in projects" :key="i" :class="['project', el.class]">
                <!-- <div class="image" :style="{backgroundImage:`url(${el.img})`}"></div> -->
                <img :src="el.img" alt="">
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
                },{
                    name:'Quality Closes',
                    type:'React App',
                    img:require('~/assets/images/quality_closes.png'),
                    technologies:['React', 'Express', 'MongoDB'],
                    class:'reverse',
                    link:'https://ivanvalovyi.github.io/market-react'
                },{
                    name:'Photo Aplication',
                    type:'Landing Page',
                    img:require('~/assets/images/photo_app.png'),
                    technologies:['HTML', 'SASS', 'JS'],
                    link:'https://ivanvalovyi.github.io/photo_app'
                },{
                    name:'Weather React',
                    type:'Weather app',
                    img:require('~/assets/images/weather.png'),
                    technologies:['React', 'OpenLayers'],
                    class:'reverse',
                    link:'https://ivanvalovyi.github.io/weather/'
                },{
                    name:'Jane Doe CV',
                    type:'Landing page',
                    img:require('~/assets/images/jane_doe.png'),
                    technologies:['HTML', 'SASS', 'JS'],
                    link:'https://ivanvalovyi.github.io/jane_doe/'
                },{
                    name:'Angular Form',
                    type:'Form',
                    img:require('~/assets/images/angular_form.png'),
                    technologies:['Angular', 'SASS'],
                    class:'reverse',
                    link:'https://ivanvalovyi.github.io/angular-form/'
                }
            ]
        }
    }
}
</script>