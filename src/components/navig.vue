<template>

    <v-app-bar dark app color="black" tag="header" extension-height="20">
        <div class="inner-wrap">
            <div class="inner-nav">
                <v-btn-toggle mandatory>
                    <router-link :to="{name:'homePage'}" class="logo-link">
                        <v-btn>
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
                        <v-btn>
                            Каталог
                        </v-btn>
                    </router-link>
                    <router-link to="/about">
                        <v-btn>
                            О нас
                        </v-btn>
                    </router-link>
                    <router-link to="/contacts">
                        <v-btn>
                            Контакты
                        </v-btn>
                    </router-link>
                </v-btn-toggle>
            </div>
        </div>
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
    a{
        background-color: black;
    }
</style>