<template>
    <div>
        first <br>
        {{ a }}
        <li v-for="item in arr" :key="item">{{ item }}</li>
    </div>
</template>

<script >
export default {
    data() {
        return {
            a : 10,
            arr : [1,2,3,4,5]
        }
    },
}
    
</script>

