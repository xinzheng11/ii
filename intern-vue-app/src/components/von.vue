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

        <hr>

        
        </div>
        <hr>
        <h1>{{ msg }}</h1>
        <button @click="rever">click</button>
        
        <textarea v-model="msg1"></textarea>
        <p>Text: {{ msg1 }}</p>

        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <span>{{ item }}</span>
                <button @click="del(index)">del</button>
                
            </li>
            <button @click="add">generate a new</button>
        </ul>
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
            msg : 'nimade',
            msg1:"",
            arr:[1,3,4,56,6,1],
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
        },
        rever(){
            this.msg = this.msg.split("").reverse().join("")
        },
        del(index){
            this.arr.splice(index,1)
        },
        add(){
            this.arr.push(Math.floor(Math.random()*20))
        }
    },
}
</script>