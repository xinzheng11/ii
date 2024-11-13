<template>
    <div>
        first <br>
        {{ a }}
        <p v-for="item in arr">{{ item }}</p>
    </div>
</template>

<script setup>
    const a = 10;
    var  arr = [1,2,3,4,5]
</script>