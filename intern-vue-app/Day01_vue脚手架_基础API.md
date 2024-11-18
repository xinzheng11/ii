## 知识点回顾

- [ ] 表达式, 变量是什么
- [ ] new的作用和含义
- [ ] 实例化对象
- [ ] 什么是对象上的, 属性和方法
- [ ] 对象的赋值和取值

- [ ] this的指向 这个只能在选项式api中使用
- [ ] 函数的形参实参, 得马上反应过来, 哪个是变量哪个是值, 谁传给谁了

如果通不过, 请记住口诀:

1. 变量是一个容器, 表达式原地都有返回结果

   ```js
   var a = 10; let const
   console.log(a); // a就是变量, 运行后使用变量里的值再原地打印
   console.log(10 + 50); // 10 + 50 就是表达式
   console.log(a > 9); // 这叫判断表达式, 原地结果是true
   ```

2. new 类名() - 原地得到一个实例对象 - 对象身上有key(或叫属性, 叫键都行), 对应的值是我们要使用的

3. 实例化对象就是new 类名() 创造出来的对象, 身上包含属性(key, 键) 对应的 值

4. 什么是属性和方法(固定格式)

   ```js
   let obj = { // 属性指的是a, b, c, d, e这些名字
       a: 10,
       b: [1, 2, 3],
       c: function(){},  const a=()=>{}
       d () {}, 函数的定义
       e: () => {} // 值是冒号:右边的值 es中的高级用法 箭头函数
   }
   // 这个格式是固定的, 必须张口就来, 张手就写, 准确率100%
   ```

5. 对象的赋值和取值(固定格式)

   有=(赋值运算符) 就是赋值, 没有就是取值

   ```js
   let obj = {
       a: 10,
       b: 20
   }
   console.log(obj.a); // 从obj对象的a上取值, 原地打印10
   obj.b = 100; // 有=, 固定把右侧的值赋予给左侧的键, 再打印obj这个对象, b的值是100了
   ```

6. this指向口诀

   在function函数中, this默认指向当前函数的调用者  调用者.函数名()

   在箭头函数中, this指向外层"函数"作用域this的值

## 1. Vue基本概念

### 1.0_为何学Vue

> 目标: 更少的时间,干更多的活. 开发网站速度, 快

![image-20230314211127690](Day01_vue脚手架_基础API.assets/image-20230314211127690.png)

例如: 把数组数据-循环铺设到li中, 看看分别如何做的?

原生js做法

```vue
<ul id="myUl"></ul>
<script>
    let arr = ["春天", "夏天", "秋天", "冬天"];
    let myUl = document.getElementById("myUl");
    for (let i = 0; i < arr.length; i++) {
        let theLi = document.createElement("li");
        theLi.innerHTML = arr[i];
        myUl.appendChild(theLi);
    }
</script>
```

Vue.js做法

```vue
<li v-for="item in arr">{{item}}</li>
<script>
    export default{
        data(){
            return{
                arr: ["春天", "夏天", "秋天", "冬天"]
            }
        }
    }
</script>
组合api写法
<script setup>
      let arr= ["春天", "夏天", "秋天", "冬天"] 
</script>
```

注意: 虽然vue写起来很爽, 但是一定不要忘记, vue的底层还是原生js

开发更加的效率和简洁, 易于维护, 快!快!快!就是块 (甚至测试, Java, Python工程师都要学点vue, 方便与前端沟通)

现在很多项目都是用vue开发的

![image-20230314211148358](Day01_vue脚手架_基础API.assets/image-20230314211148358.png)

### 1.1_Vue是什么



![image-20230314211202534](Day01_vue脚手架_基础API.assets/image-20230314211202534.png)

==渐进式==javacript==框架==, 一套拥有自己规则的语法

官网地址: https://cn.vuejs.org/ (作者: 尤雨溪)

> ### 什么是渐进式

渐进式: 逐渐进步, 想用什么就用什么, 不必全都使用
![image-20230314211219487](Day01_vue脚手架_基础API.assets/image-20230314211219487.png)



> ### 什么是库和框架

补充概念:

库:  封装的属性或方法 (例jquery.js)

框架: 拥有自己的规则和元素, 比库强大的多 (例vue.js)

### 1.2_Vue学习的方式

+ 传统开发模式：基于html/css/js文件开发vue

  ![image-20230314211414735](Day01_vue脚手架_基础API.assets/image-20230314211414735.png)

+ 工程化开发方式：在webpack环境中开发vue，这是最推荐, 企业常用的方式

  ![image-20230314211422802](Day01_vue脚手架_基础API.assets/image-20230314211422802.png)

### 1.3 vue安装

#### 使用vite创建vue项目：

```cmake
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue
```

构建演示：

![image-20230325205520935](Day01_vue脚手架_基础API.assets/image-20230325205520935.png)

### 执行顺序：

先cd 进入目录，或直接使用vscode--->open 文件

```cmake
1、cd vue-begin02
2、npm install   
3、npm run dev
```

## 2. @vue/cli脚手架

### 2.0_@vue/cli 脚手架介绍

> 目标: webpack自己配置环境很麻烦, 下载@vue/cli包,用vue命令创建脚手架项目

- @vue/cli是Vue官方提供的一个全局模块包(得到vue命令), 此包用于创建脚手架项目

  脚手架是为了保证各施工过程顺利进行而搭设的工作平台

![image-20230314211513386](Day01_vue脚手架_基础API.assets/image-20230314211513386.png)

> ### @vue/cli的好处

- 开箱即用

  0配置webpack

  babel支持

  css, less支持

  开发服务器支持

### 2.1 @vue/cli 目录和代码分析

> 目标: 讲解重点文件夹, 文件的作用, 以及文件里代码的意思

```bash
 vuecil-demo        # 项目目录
    ├── node_modules # 项目依赖的第三方包
    ├── public       # 静态文件目录
      ├── favicon.ico# 浏览器小图标
      └── index.html # 单页面的html文件(网页浏览的是它)
    ├── src          # 业务文件夹
      ├── assets     # 静态资源
        └── logo.png # vue的logo图片
      ├── components # 组件目录
        └── HelloWorld.vue # 欢迎页面vue代码文件 
      ├── App.vue    # 整个应用的根组件
      └── main.js    # 入口js文件
    ├── .gitignore   # git提交忽略配置
    ├── babel.config.js  # babel配置
    ├── package.json  # 依赖包列表
    ├── README.md    # 项目说明
	└── yarn.lock    # 项目包版本锁定和缓存地址
```

主要文件及含义

```js
node_modules下都是下载的第三方包
public/index.html – 浏览器运行的网页
src/main.js – webpack打包的入口文件
src/App.vue – vue项目入口页面
package.json – 依赖包列表文件
```

### 2.2_@vue/cli 项目架构了解

> 目标: 知道项目入口, 以及代码执行顺序和引入关系

![image-20230314211705485](Day01_vue脚手架_基础API.assets/image-20230314211705485.png)

### 2.3_@vue/cli 自定义配置

> 目标：项目中没有webpack.config.js文件，因为@vue/cli用的vue.config.js

src并列处新建vue.config.js

```jsx
npm run dev
如果式vite.config.js

server:{
    port: 8000
}


npm run serve
/* 覆盖webpack的配置 */
module.exports = {
  devServer: { // 自定义服务配置
    open: true, // 自动打开浏览器
    port: 3000
  }
}

```

### 2.4_@vue/cli 单vue文件讲解

> 目标: 单vue文件好处, 独立作用域互不影响

Vue推荐采用.vue文件来开发项目

template里只能有一个根标签

vue文件-独立模块-作用域互不影响

style配合scoped属性, 保证样式只针对当前template内标签生效

vue文件配合webpack, 把他们打包起来插入到index.html

```vue
<!-- template必须, 只能有一个根标签, 影响渲染到页面的标签结构 -->
<template>
  <div>欢迎使用vue</div>
</template>

<!-- js相关 -->
<script>
export default {
  name: 'App'
}
</script>

<!-- 当前组件的样式, 设置scoped, 可以保证样式只对当前页面有效 -->
<style scoped>
</style>

```

最终: Vue文件配合webpack, 把他们打包起来插入到index.html, 然后在浏览器运行

### 2.5_@vue/cli 欢迎界面清理

> 目标: 我们开始写我们自己的代码, 无需欢迎页面

* src/App.vue默认有很多内容, 可以全部删除留下框
* assets 和 components 文件夹下的一切都删除掉 (不要默认的欢迎页面)

### 2.6 模板语法

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。

### 2.7 文本插值

最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：

```html
<script>
export default {
    data(){
        return{
            msg: "模板语法"
        }
    }
}
</script>
<template>
    <span>
        Message: {{msg}}
    </span>
</template>
<style scoped>

</style>
```

双大括号标签会被替换为相应组件实例中 `msg` 属性的值。同时每次 `msg` 属性更改时它也会同步更新。

### 2.8 原始 HTML

双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 v-html 指令

```html
<script>
export default {
    data(){
        return{
           rawHtml: "<span  style="color: red">展示文本插值和html插入效果 </span>" 
        }
    }
}
</script>
<template>
<p>这是文本插值的效果展示: {{ rawHtml }}</p>
<p>这是使用v-html的方式展示: <span  style="color: red" v-html="rawHtml"></span></p>
</template>
```

这里我们遇到了一个新的概念。这里看到的 `v-html` attribute 被称为一个**指令**。指令由 `v-` 作为前缀，表明它们是一些由 Vue 提供的特殊 attribute，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。这里我们做的事情简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 `rawHtml` 属性保持同步。

### 2.9 v-once指令

通过v-once指令，你也能执行一次性的插值，当数据改变时，插值处的内容不会更新，但是需要留意一点这个会影响到该节点上的其他数据绑定：

示例展示：

```html
<script>
export default {
  data(){
    return{
      msg: "",
      num: 2,
      uname:""
    }
  }
}
</script>

<template>
   <div>
   <h1>{{msg}}</h1> 
   <h2>{{num}}</h2>
    <p>{{uname}}</p>
      <!--v-once 当数据改变的时候，插值处的内容不会更新-->
    <p v-once>{{uname}}</p>
     <button @click="changUname">改变uname值</button>
</template>  
```

- 如果想要改变num的值可以加一个方法调用：

- 在data方法的结尾处 ,method:{}

```html
<script>
export default {
  data(){
    return{
      msg: "",
      num: 2,
      uname:"张三"
    }
  },
  methods:{  
    //给vue定义一个方法 用来改变属性值
    changUname: function(){
      //this 指向vue实例
      this.uname="老六"
    }

  }
}
</script>
```



## ==3. Vue指令==

### 3.0_vue基础-插值表达式

> 目的: 在dom标签中, 直接插入内容

又叫: 声明式渲染/文本插值

语法: {{ 表达式 }}

```jsx
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age > 18 ? '成年' : '未成年' }}</h3>
  </div>
</template>

<script>
export default {
  data() { // 格式固定, 定义vue数据之处
    return {  // key相当于变量名
      msg: "hello, vue",
      obj: {
        name: "小vue",
        age: 5
      }
    }
  }
}
</script>
<style>
</style>

```

> 总结: dom中插值表达式赋值, vue的变量必须在data里声明

### 3.1_vue基础-MVVM设计模式 mvc 数据显示到视图上需要借助控制器

> 目的: 转变思维, 用数据驱动视图改变, 操作dom的事, vue源码内干了

设计模式: 是一套被反复使用的、多数人知晓的、经过分类编写目的、代码设计经验的总结。

演示: 在上个代码基础上, 在devtool工具改变M层的变量, 观察V层(视图的自动同步)

等下面学了v-model再观察V改变M的效果



+ MVVM，一种软件架构模式，决定了写代码的思想和层次
  + M：   model数据模型          (data里定义)	
  + V：    view视图                   （html页面）
  + VM： ViewModel视图模型  (vue.js源码) v-model

- MVVM通过`数据双向绑定`让数据自动地双向同步  **不再需要操作DOM**
  - V（修改视图） -> M（数据自动同步）
  - M（修改数据） -> V（视图自动同步）

![image-20230314212027934](Day01_vue脚手架_基础API.assets/image-20230314212027934.png)

**1. 在vue中，不推荐直接手动操作DOM！！！**  

**2. 在vue中，通过数据驱动视图，不要在想着怎么操作DOM，而是想着如何操作数据！！**(思想转变)

![image-20230314212034321](Day01_vue脚手架_基础API.assets/image-20230314212034321.png)

> 总结: vue源码内采用MVVM设计模式思想, 大大减少了DOM操作, 提高开发效率

### 3.2_vue指令-v-bind

> 目标: 给标签属性设置vue变量的值

**vue指令, 实质上就是特殊的 html 标签属性, 特点:  v- 开头**

每个指令, 都有独立的作用

- 语法：`v-bind:属性名="vue变量"`
- 简写：`:属性名="vue变量"`  语法糖

```html
<script>
 import imgObj from './assets/mm.gif'
<!-- vue指令-v-bind属性动态赋值 -->
export default {
  data(){
    return{
      url:"http://www.baidu.com",
      imgUrl: "https://img13.360buyimg.com/n1/s450x450_jfs/t1/175460/22/30483/67259/638dbe8fE9900688c/83ac7462bd005fdf.jpg",
      localImg: imgObj
    }
  }
}
</script>

<template>
   <!-- 2. 值 -> 标签原生属性上 -->
    <!-- 语法: v-bind:原生属性名="vue变量" -->
    <a v-bind:href="url">点击去百度</a>
    <!-- 语法: :原生属性名="vue变量" -->
    <img :src="imgUrl" />
    <img :src="localImg">
  </div>
  
</template>

```

> 总结: 把vue变量的值, 赋予给dom属性上, 影响标签显示效果

**案例2：动态更改属性的值**

```html
<script>
export default {
  data(){
    return{
      id: "d1",
      imageUrl: "https://img13.360buyimg.com/n1/s450x450_jfs/t1/175460/22/30483/67259/638dbe8fE9900688c/83ac7462bd005fdf.jpg"
    }
  },
  methods:{  
    changogg:function(){
      this.id="d2"
    }
  }
}
</script>
<template>
   <div>
    <!--v-bind 动态绑定属性的内容-->
    <p v-bind:id="id">v-bind的绑定</p>
    <img v-bind:src="imageUrl"/>
    <button @click="changogg">更改id的颜色</button>
    <button @click="id='d2'">更改id的颜色</button>
     
  </div>
</template>
<style>
#d1{
  color: burlywood;
}
#d2{
  color: red;
}
</style>

```



### 3.3_vue指令-v-on

> 目标: 给标签绑定事件

* 语法
  * v-on:事件名="要执行的==少量代码=="
  * v-on:事件名="methods中的函数"
  * v-on:事件名="methods中的函数(实参)" 
* 简写: @事件名="methods中的函数"

```html
<!-- vue指令:   v-on事件绑定-->
<p>你要买商品的数量: {{count}}</p>
<button v-on:click="count = count + 1">增加1</button>
<button v-on:click="addFn">增加1个</button>
<button v-on:click="addCountFn(5)">一次加5件</button>

<button @click="subFn">减少</button>

<script>
    export default {
        // ...其他省略
        methods: {
            addFn(){ // this代表export default后面的组件对象(下属有data里return出来的属性)
                this.count++
            },
            addCountFn(num){
                this.count += num
            },
            subFn(){
                this.count--
            }
        }
    }
</script>
```

> 总结: 常用@事件名, 给dom标签绑定事件, 以及=右侧事件处理函数

### 3.4_vue指令-v-on事件对象

> 目标: vue事件处理函数中, 拿到事件对象

* 语法:
  * 无传参, 通过形参直接接收
  * 传参, 通过$event指代事件对象传给事件处理函数

```vue
<template>
  <div>
    <a v-on:click="one" href="http://www.baidu.com">阻止百度</a>
    <hr>
    <a @click="two(10, $event)" href="http://www.baidu.com">阻止去百度</a>
  </div>
</template>

<script>
export default {
  methods: {
        // 1. 事件触发, 无传值, 可以直接获取事件对象是
    one(e){
      e.preventDefault()
    },
      // 2. 事件触发, 传值, 需要手动传入$event
    two(num, e){
      e.preventDefault()
    }
  }
}
</script>
```

**动态参数说明：**

也可以在指令参数中使用 JavaScript 表达式，方法是用方括号括起来：

示例：

```html
<script>
export default {
  data(){
    return{
      id: "d1",
      attributeName:"id",
      mouseEvent:"click",
    }
  }
}
</script>

<template>
   <div>
    <!--动态参数说明-->
    <span v-bind:[attributeName]="id">v-bind的绑定</span><br>
    <button @click="attributeName='class'">改变属性字体大小</button>

  <!--动态事件 
  MouseEvent  鼠标点击事件
  -->
    <button @[mouseEvent]="attributeName='class'">改变属性</button>
    <!--mouseover 鼠标移上事件-->
    <button @click="mouseEvent='mouseover'">改变属性样式</button> 
  </div>
  
</template>
<style>
.d1{
  font-size: 50px;
}
</style>

```



### 3.5_vue指令-v-on修饰符

> 目的: 在事件后面.修饰符名 - 给事件带来更强大的功能
>
> 修饰符 (modifier) 是以半角句号`.`指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault`

* 语法:
  * @事件名.修饰符="methods里函数"
    * .stop - 阻止事件冒泡
    * .prevent - 阻止默认行为
    * .once - 程序运行期间, 只触发一次事件处理函数

```html
<template>
  <div @click="fatherFn">
    <!-- vue对事件进行了修饰符设置, 在事件后面.修饰符名即可使用更多的功能 -->
    <button @click.stop="btn">.stop阻止事件冒泡</button>
    <a href="http://www.baidu.com" @click.prevent="btn">.prevent阻止默认行为</a>
    <button @click.once="btn">.once程序运行期间, 只触发一次事件处理函数</button>
  </div>
</template>

<script>
export default {
  methods: {
    fatherFn(){
      console.log("father被触发");
    },
    btn(){
      console.log(1);
    }
  }
}
</script>
```

> 总结: 修饰符给事件扩展额外功能

### 3.6_vue指令-v-on按键修饰符

> 目标: 给键盘事件, 添加修饰符, 增强能力

* 语法:
  * @keyup.enter  -  监测回车按键  松开
  * @keyup.esc     -   监测返回按键  松开
  *  @keydown.esc  esc按键按下才有回应
  *  @keydown.enter  按键按下才有回应

```html
<template>
  <div>
       <!-- 1. 绑定键盘按下事件.enter-回车 -->
    <input type="text" @keydown.enter="enterFn">
    <hr>
       <!-- 2. .esc修饰符 - 取消键 -->
    <input type="text" @keydown.esc="escFn">
  </div>
</template>

<script>
export default {
 methods: {
   enterFn(){
     console.log("enter回车按键了");
   },
   escFn(){
     console.log("esc按键了");
   }
 }
}
</script>
```

> 总结: 多使用事件修饰符, 可以提高开发效率, 少去自己判断过程

### 3.7_课上练习-翻转世界

> 目标: 点击按钮 - 把文字取反显示 - 再点击取反显示(回来了)

> 提示: 把字符串取反赋予回去

正确代码:

```html
<template>
    <div>
        <!-- 1. 变量准备-静态页面铺设 -->
        <h1>{{message}}</h1>
        <!-- 2. 绑定点击事件 -->
        <button @click="btn">翻转世界</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:"hello,WORLD"
        };
    },
    methods:{
        btn(){
         // 3.翻转字体  
        this.message=this.message.split("").reverse().join("")
    }
    }
   
}
</script>
```

> 总结: 记住方法特点, 多做需求, vue是数据变化视图自动更新, 减少操作DOM时间, 提高开发效率

### 3.8_vue指令 v-model

> 目标: 把value属性和vue数据变量, 双向绑定到一起

* 语法: v-model="vue数据变量"
* 双向数据绑定
  * 数据变化 -> 视图自动同步
  * 视图变化 -> 数据自动同步
* 演示: 用户名绑定 - vue内部是MVVM设计模式

```vue
<template>
  <div>
    <!-- 
    	v-model:是实现vuejs变量和表单标签value属性, 双向绑定的指令
    -->
    <div>
      <span>用户名:</span>
      <input type="text" v-model="username" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" v-model="pass" />
    </div>
    <div>
      <span>来自于: </span>
      <!-- 下拉菜单要绑定在select上 -->
      <select v-model="from">
        <option value="北京市">北京</option>
        <option value="南京市">南京</option>
        <option value="天津市">天津</option>
      </select>
    </div>
    <div>
      <!-- (重要)
      遇到复选框, v-model的变量值
      非数组 - 关联的是复选框的checked属性
      数组   - 关联的是复选框的value属性
       -->
      <span>爱好: </span>
      <input type="checkbox" v-model="hobby" value="抽烟">抽烟
      <input type="checkbox" v-model="hobby" value="喝酒">喝酒
      <input type="checkbox" v-model="hobby" value="写代码">写代码
    </div>
    <div>
      <span>性别: </span>
      <input type="radio" value="男" name="sex" v-model="gender">男
      <input type="radio" value="女" name="sex" v-model="gender">女
    </div>
    <div>
      <span>自我介绍</span>
      <textarea v-model="intro"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pass: "",
      from: "",
      hobby: [], 
      sex: "",
      intro: "",
    };
    // 总结:
    // 特别注意: v-model, 在input[checkbox]的多选框状态
    // 变量为非数组, 则绑定的是checked的属性(true/false) - 常用于: 单个绑定使用
    // 变量为数组, 则绑定的是他们的value属性里的值 - 常用于: 收集勾选了哪些值
  }
};
</script>
```

> 总结: 本阶段v-model只能用在表单元素上, 以后学组件后讲v-model高级用法

### 3.9_vue指令 v-model修饰符

> 目标: 让v-model拥有更强大的功能

* 语法:
  * v-model.修饰符="vue数据变量"
    * .number   以parseFloat转成数字类型
    * .trim          去除首尾空白字符
    * .lazy           在change时触发而非inupt时

```vue
<template>
  <div>
    <div>
      <span>年龄:</span>
         <!-- .number修饰符-把值parseFloat转数值再赋予给v-model对应的变量 -->
      <input type="text" v-model.number="age">
    </div>
    <div>
      <span>人生格言:</span>
         <!-- .trim修饰 - 去除首尾两边空格 -->
      <input type="text" v-model.trim="motto">
    </div>
    <div>
      <span>自我介绍:</span>
      <textarea v-model.lazy="intro"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: "",
      motto: "",
      intro: ""
    }
  }
}
</script>
```

> 总结: v-model修饰符, 可以对值进行预处理, 非常高效好用

### 3.10_vue指令 v-text和v-html

> 目的: 更新DOM对象的innerText/innerHTML

* 语法:
  * v-text="vue数据变量"    
  * v-html="vue数据变量"
* 注意: 会覆盖插值表达式

```vue
<template>
  <div>
    <p v-text="str"></p>
    <p v-html="str"></p>
        <!-- 注意: v-text或v-html会覆盖插值表达式 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "<span>我是一个span标签</span>"
    }
  }
}
</script>
```

> 总结: v-text把值当成普通字符串显示, v-html把值当做html解析

### 3.11_vue指令 v-show和v-if

> 目标: 控制标签的隐藏或出现

* 语法:
  * v-show="vue变量"            
  * v-if="vue变量" 
* 原理
  * v-show 用的display:none隐藏   (频繁切换使用)
  * v-if  直接从DOM树上移除
* 高级
  * v-else使用
  * v-else-if

```html
<template>
  <div>
    <h1 v-show="isOk">v-show的盒子</h1>
    <h1 v-if="isOk">v-if的盒子</h1>

    <div>
      <p v-if="age > 18">我成年了</p>
      <p v-else>还得多吃饭</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOk: true,
      age: 15
    }
  }
}
</script>
```

> 总结: 使用v-show和v-if以及v-else指令, 方便通过变量控制一套标签出现/隐藏

**综合案例编辑-折叠面板**

​	此案例使用了less语法, 项目中下载模块

```vue
npm install less@4.1.2 less-loader@6.2.0 -D
或者
npm install less@4.1.2
npm install less-loader@6.2.0 -D
```

代码实现：

```html
<template>
  <div >
    <div id="app01">
        <h3>案例：折叠面板</h3>
        <div>
            <div class="title">
                <h4>程序员之路</h4>
                <!-- 1.绑定点击事件 -->
                <span class="btn" @click="btn">
                <!-- 4. 根据isShow的值显示不同文字 -->
                {{ isShow ? '收起' : '展开'}}
                </span>
            </div>
            <!-- 2. v-show配合变量来控制标签隐藏出现 -->
            <div class="container" v-show="isShow">
                <p>少时狂把编程想,</p>
                <p>无畏赴身IT行。</p>
                <p>纵使荣华未可近，</p>
                <p>我自coding又何妨！</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isShow:"true"
        }
    },
    methods: {
        btn(){
             // 3. 点击时, 把值改成false
            this.isShow=!this.isShow
        }
    }
}
</script>
<style lang="less">
    body{
        background-color: #CCC;
        #app01 {
            width: 400px;
            margin: 20px auto;
            background-color: #fff;
            border: 4px solid blueviolet;
            border-radius: 1em;
            box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
            padding: 1em 2em 2em;
         h3 {
            text-align: center;
            }
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #ccc;
            padding: 0 1em;
            }
        .title h4 {
            line-height: 2;
            margin: 0;
            }
        .container {
            border: 1px solid #ccc;
            padding: 0 1em;
            }
        .btn {
            /* 鼠标改成手的形状 */
            cursor: pointer;
        }
    }
}

</style>

```



### 3.12_vue指令-v-for

> 目标: 列表渲染, 所在标签结构, 按照数据数量, 循环生成
>
> `v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 items 是源数据数组，而 `item` 则是被迭代的数组元素的 “别名”

* 语法
  * v-for="(值, 索引) in 目标结构"
  * v-for="值 in 目标结构"
  
* 目标结构:
  
  * 可以遍历数组 / 对象 / 数字 / 字符串 (可遍历结构)
  
* 注意:

  v-for的临时变量名不能用到v-for范围外

```vue
<template>
  <div id="app">
    <div id="app">
      <!-- v-for 把一组数据, 渲染成一组DOM -->
      <!-- 口诀: 让谁循环生成, v-for就写谁身上 -->
      <p>学生姓名</p>
      <ul>
        <li v-for="(item, index) in arr" :key="item">
          {{ index }} - {{ item }}
        </li>
      </ul>

      <p>学生详细信息</p>
      <ul>
        <li v-for="obj in stuArr" :key="obj.id">
          <span>{{ obj.name }}</span>
          <span>{{ obj.sex }}</span>
          <span>{{ obj.hobby }}</span>
        </li>
      </ul>

      <!-- v-for遍历对象(了解) -->
      <p>老师信息</p>
      <div v-for="(value, key) in tObj" :key="value">
        {{ key }} -- {{ value }}
      </div>

      <!-- v-for遍历整数(了解) - 从1开始 -->
      <p>序号</p>
      <div v-for="i in count" :key="i">{{ i }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["小明", "小欢欢", "大黄"],
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      tObj: {
        name: "小黑",
        age: 18,
        class: "1段",
      },
      count: 10,
    };
  },
};
</script>
```

> 总结: vue最常用指令, 铺设页面利器, 快速把数据赋予到相同的dom结构上循环生成
>
> v-if和v-for同时使用时：当它们处于同一节点，`v-if` 的优先级比 `v-for` 更高，这意味着 `v-if` 将没有权限访问 `v-for` 里的变量：

### 4 数组更新检测

### 4.1 vue基础 v-for更新监测

> 目标: 当v-for遍历的目标结构改变, Vue触发v-for的更新

情况1: 数组翻转

情况2: 数组截取

情况3: 更新值

口诀:

数组变更方法, 就会导致v-for更新, 页面更新

数组非变更方法, 返回新数组, 就不会导致v-for更新, 可采用覆盖数组或this.$set()

```vue
<template>
    <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button @click="revBtn">数组翻转</button>
    <button @click="sliceBtn">截取前3个</button>
    <button @click="updateBtn">更新第一个元素值</button>
    <button @click="filterUp">过滤条件数组</button>
  </div>
</template>
<script>
export default {
    data(){
    return {
      arr: [5, 3, 9, 2, 1],
      arr2:[2,5,6,7]
    }
  },
  methods: {
    revBtn(){
      // 1. 数组翻转可以让v-for更新
      this.arr.reverse()
    },
    sliceBtn(){
      // 2. 数组slice方法不会造成v-for更新
      // slice不会改变原始数组: 用于从已有的数组中选出选定的数组元素
       //this.arr.slice(0, 3)

      // 解决v-for更新 - 覆盖原始数组
      let newArr = this.arr.slice(0, 3)
      this.arr = newArr
    },
    updateBtn(){
      // 3. 更新某个值
     //  this.arr[0] = 1000;
     //concat 数组拼接
      let newArr=this.arr.concat(this.arr2)
      console.log(newArr)
    },
    filterUp(){
        //filter()：过滤，可以过滤数组中的元素，还可以作为过滤器使用
        /*
        filter会返回一个新数组，新数组中包含符合条件的所有元素，
        arr.filter(function(val,index,arr))
        三个参数：
            val：当前数组值
            index：数组的下标
            arr：是数组
        */
        let newarr=this.arr.filter(function(val,index,arr){
            return val>3
        });
        console.log(newarr)

    }
  }
}
</script>
```

这些方法会触发数组改变, v-for会监测到并更新页面

- `push()`  添加
- `pop()` 删除
- `shift()` 尾插入
- `unshift()` 头插入
- `splice()` 
- `sort()`
- `reverse()`

这些方法不会触发v-for更新

* `slice()`
* `filter()`
* `concat()` 

> 注意: vue不能监测到数组里赋值的动作而更新, 如果需要请使用Vue.set() 或者this.$set(), 或者覆盖整个数组

> 总结:  改变原数组的方法才能让v-for更新

## 附加练习-1.帅哥美女走一走

> 目标: 点击按钮, 改变3个li的顺序, 在头上的就到末尾.

> 提示: 操作数组里的顺序, v-for就会重新渲染li

代码演示

```html
<template>
  <div>
    <ul>
      <li v-for="item in myArr" :key="item">{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myArr: ["帅哥", "美女", "程序猿"],
    };
  },
  methods: {
    btn() {
      // 头部数据加入到末尾
      this.myArr.push(this.myArr[0]);
      // 再把头部的数据删除掉
      this.myArr.shift();
    },
  },
};
</script>
```

## 附加练习-2.加加减减

> 目标: 点击生成按钮, 新增一个li(随机数字)和删除按钮, 点击删除按钮, 删除对应的li和值

> 提示: 数组渲染列表, 生成和删除都围绕数组操作

代码演示

```html
<template>
  <div>
    <ul>
      <li v-for="(item, ind) in arr" :key="item">
        <span>{{ item }}</span>
        <button @click="del(ind)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 5, 3],
    };
  },
  methods: {
    add() {
      this.arr.push(Math.floor(Math.random() * 20));
    },
    del(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>
```

## 附加练习-3.购物车

> 目标: 完成商品浏览和删除功能, 当无数据给用户提示

* 需求1: 根据给的初始数据, 把购物车页面铺设出来
* 需求2: 点击对应删除按钮, 删除对应数据
* 需求3: 当数据没有了, 显示一条提示消息

html+css和数据代码结构(==可复制接着写==)

```vue
<template>
  <div>
    <table class="tb">
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr>
        <td>1</td>
        <td>车名</td>
        <td>2020-08-09</td>
        <td>
          <button>删除</button>
        </td>
      </tr>
      <tr>
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", time: "2020-08-01" },
        { id: 2, name: "宝马", time: "2020-08-02" },
        { id: 3, name: "奥迪", time: "2020-08-03" },
      ],
    };
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>

```

正确代码(==先不要看==)

```vue
<template>
  <div>
    <table class="tb">
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item,index) in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.time}}</td>
            <td>
                <button @click="del(index)">删除</button>
            </td>
        </tr>
      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", time: "2020-08-01" },
        { id: 2, name: "宝马", time: "2020-08-02" },
        { id: 3, name: "奥迪", time: "2020-08-03" },
      ],
    };
  },
  methods: {
    del(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },
  },
};
</script>

```
