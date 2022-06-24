<template>
    <div class="technologies" id="technologies">
        <h2 class="title">Technologies</h2>

        <div class="all_tech_blok">
            <div v-for="(el, i) in all_technologies" :key="i" :class="['one_tech_blok', el.title]">
                <h3 class="subtitle">{{el.title}}</h3>

                <div class="tech_list">

                    <div v-for="(tech, tech_i) in el.tech" :key="tech_i" class="one_tech">
                        <span :style="tech.style"></span>
                        <p class="small_text">{{tech.name}}</p>
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
            all_technologies:[{
                title:'Frontend',
                tech:[
                    {
                        name:'HTML',
                        style:{background:'rgba(241, 102, 42, 1)'}
                    },{
                        name:'CSS',
                        style:{background:'rgba(28, 126, 190, 1)'}
                    },{
                        name:'SASS',
                        style:{background:'rgba(205, 103, 153, 1)'}
                    },{
                        name:'JavaScript',
                        style:{background:'rgba(247, 223, 30, 1)'}
                    },{
                        name:'Vue',
                        style:{background:'rgba(65, 184, 131, 1)'}
                    },{
                        name:'Vue Router',
                        style:{background:'rgba(132, 208, 172, 1)'}
                    },{
                        name:'Vue X',
                        style:{background:'rgba(81, 199, 144, 1)'}
                    },{
                        name:'Nuxt JS',
                        style:{background:'rgba(16, 135, 117, 1)'}
                    },{
                        name:'Gulp JS',
                        style:{background:'rgba(254, 74, 75, 1)'}
                    },{
                        name:'React',
                        style:{background:'#5183ee'}
                    },{
                        name:'React Router',
                        style:{background:'#3e75eb'}
                    },{
                        name:'Redux',
                        style:{background:'#7341d1'}
                    },{
                        name:'Angular',
                        style:{background:'rgba(221, 0, 49, 1)'}
                    },
                ]
            },{
                title:'Backend',
                tech:[
                    {
                        name:'Node',
                        style:{background:'rgba(78, 144, 73, 1)'}
                    },{
                        name:'Express',
                        style:{background:'rgba(99, 99, 99, 1)'}
                    },{
                        name:'MongoDB',
                        style:{background:'rgba(108, 172, 72, 1)'}
                    },{
                        name:'Mongoose',
                        style:{background:'rgba(134, 3, 0, 1)'}
                    },{
                        name:'Socket.io',
                        style:{background:'black'}
                    },
                ]
            },{
                title:'Other',
                tech:[
                    {
                        name:'GitHub',
                        style:{background:'black'}
                    },{
                        name:'Figma',
                        style:{background:'rgba(220, 81, 122, 1)'}
                    },{
                        name:'VS Code',
                        style:{background:'rgba(28, 126, 190, 1)'}
                    }
                ]
            },]
        }
    },
    methods:{
        img_src(src){
            return require(`~/assets/images/${src}`)
        }
    }
}
</script>