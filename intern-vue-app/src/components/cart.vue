<template>
    <div class="content">
        <h1>购物车系统</h1>
        <table class="tb">
            <tr>
                <th>商品编号</th>
                <th>品牌名称</th>
                <th>创立时间</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in list" :key="item">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.time}}-1-1</td>
                <td>
                    <button>delete</button>
                </td>
            </tr>
            <tr>
                <td colspan="4">no more datas</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {id:1,name:'bmw',time:2020},
                {id:2,name:'benz',time:2022},
                {id:3,name:'audi',time:2020},
            ],        
        }
    },
}
</script>
<style scoped>
.content{
    border: 1px solid #ccc;
}
h1{
    text-align: center;
    width: 100%;
}
.tb {
    width: 100%;
    border-collapse:collapse ;
    border: 1px solid #ccc;
}
tr {
    text-align: center;
    
}
td {
        border: 1px solid #ccc;
        padding: 8px;
    }
</style>