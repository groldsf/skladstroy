<template>
    <div>
        <div >
            <img :src="image" alt="">
        </div>

    </div>
</template>

<script>
    export default {
        name: "ImgBlock",
        props: ["image"]
    }

</script>

<style scoped>

</style>