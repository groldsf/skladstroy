<template>
    <div>
        <span class="bg"></span>
        <v-app dark>
            <v-content>
                <navig/>
                <div class="wrap">
                    <router-view/>
                </div>
                <myfooter/>
            </v-content>
        </v-app>
    </div>

</template>



<script>
    import navig from "@/components/navig";
    import myfooter from "@/components/myfooter";

    export default {
        name: 'app',
        components: {
            navig,
            myfooter,
        }
    }
</script>

<style>
    .cross-line{
        width: 100%;
        display: block;
    }
    .v-toolbar__extension{
        padding: 0 !important;
    }
    .bg{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-image:url("/pics/Layer.png");
        background-size: cover;
        background-color: red;
    }
</style>
