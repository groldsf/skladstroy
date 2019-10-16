<template>
    <div>
        <h1>test</h1>
        <v-btn class="butt123">
                text moretext moretext moretext moretext moretext moretext
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "TestPolygon"
    }
</script>

<style>

    .theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
        /*background-color: chartreuse;*/
    }
    .butt123{
        display: block;
        width: 100px;
        white-space: normal!important;
        height: auto!important;
    }
</style>