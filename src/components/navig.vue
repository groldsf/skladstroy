<template>
    <div>

        <header class="main-navigation">
            <div class="inner-wrap">
                <div class="inner-nav">
                    <v-btn-toggle
                            v-model="toggle_exclusive"
                            rounded
                    >
                        <a  href="indexx.html" class="logo-link"><img src="pics/logo.svg" alt="LOGO" /></a>
                        <ul class="navigation-list">
                            <li><router-link to="/catalog">Каталог</router-link></li>
                            <!--                        <li><router-link to="/metall-construct">Металлоконструкции</router-link></li>-->
                            <!--                        <li><router-link to="/ventellation">Системы вентиляции</router-link></li>-->
                            <li><router-link to="/about">О нас</router-link></li>
                            <li><router-link to="/contacts">Контакты</router-link></li>
                        </ul>
                    </v-btn-toggle>
                </div>
             </div>
            <div class="cross-line">
            </div>
        </header>

    </div>
</template>

<script>

    export default {
        name: "navig",



    }
</script>

<style scoped>



</style>