<template>
    <div class="wrap">
        <h1>{{type.name}} {{type.id}}</h1>  <!-- названия секций cайта-->
        <!--<h2>{{subtype.name}}</h2>-->

        <div>

        </div>
    </div>
</template>

<script>
    export default {
        props: ["type"],
        name: "ContentNoBTN",
    }
</script>

<style scoped>
    h1  {text-align: center;}
</style>