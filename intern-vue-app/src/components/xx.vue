<template>
    <div>
        {{ msg }}
        <p >{{ name }}</p>
        <button @click="name = 'nima'" style="color: white;">click</button>
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