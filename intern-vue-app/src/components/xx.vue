<template>
    <div>
        {{ msg }}
        <p >{{ name }}</p>
        <button @click="name = 'nima'">click</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:'11',
            name : 'kime'
        }
    },
}
</script>