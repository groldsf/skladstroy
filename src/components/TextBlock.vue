<template>
    <div v-html="text"></div>
</template>

<script>
    export default {
        name: "TextBlock",
        props: ["text"]
    }
</script>

<style scoped>

</style>