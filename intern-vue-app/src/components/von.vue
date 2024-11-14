<template>
    <div>
        <h1>track quantity{{ num }}</h1>
        <button @click="num++" :style="styleObject">click</button>
        <button @click="change()" :style="styleObject">click</button>

        <hr>
        <div @click="father">
            <button @click.stop="btn">stop bubble</button>
            <a href="https://www.baidu.com" @click.prevent="btn">prevent default</a>
            <button @click.once="btn">once act once</button>
        </div>
 </div>
</template>
<script>
export default {
    data() {
        return {
            num:0,
            styleObject: {
                color: 'white',
                // fontSize: '20px'
            },
        }
    },
    methods: {
        father(){
            console.log("exterior acted");

            
        },
        btn(){
            console.log("interior acted");
            
        },
        change(){
            this.num += 10
        }
    },
}
</script>