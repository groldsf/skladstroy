<template>
        <v-app-bar app color="black" tag="header" extension-height="20">
            <v-row>

                <v-col sm="12" md="8" class="inner-wrap">
                    <v-btn-toggle mandatory >
                        <router-link :to="{name:'homePage'}" class="logo-link">
                            <v-btn text>
                                <img src="pics/logo.svg" alt="LOGO" />
                            </v-btn>
                        </router-link>
                        <!--                        <ul class="navigation-list">-->
                        <!--                            -->
                        <!--                                                    <li><router-link to="/metall-construct">Металлоконструкции</router-link></li>-->
                        <!--                                                    <li><router-link to="/ventellation">Системы вентиляции</router-link></li>-->
                        <!--                            -->
                        <!--                        </ul>-->
                        <router-link to="/catalog">
                            <v-btn text>
                                Каталог
                            </v-btn>
                        </router-link>
                        <router-link to="/about">
                            <v-btn text>
                                О нас
                            </v-btn>
                        </router-link>
                        <router-link to="/contacts">
                            <v-btn text>
                                Контакты
                            </v-btn>
                        </router-link>
                    </v-btn-toggle>
                </v-col>

            </v-row>
            <template class="ma-0 pa-0" #extension>
                <div class="cross-line"/>
            </template>
        </v-app-bar>



</template>

<script>

    export default {
        name: "navig",
    }
</script>

<style scoped>
    .inner-wrap{
        /*width: 1050px;*/
        margin: 0 auto;
    }
    a{
        background-color: black;
    }
    .inner-wrap{
        background-color: black !important;
    }
</style>