<template>
    <v-footer dark padless>
<!--              app>-->

        <div class="footer123">
            <div class="cross-line"/>


            <div class="wrap">
                <div class="footer-el">
                    <p>
                        АДРЕС: Г.ВОРОНЕЖ,УЛ.КОЛЬЦОВСКАЯ,17
                    </p>
                    <p >
                        ТЕЛЕФОН:<a href="tel:+79192334380"> +7-919-233-43-80</a>
                    </p>
                </div>

                <div class="footer-el">
                    <p>
                        ПОЧТА:<a href="mailto:sklad-stroy@mail.ru">SKLAD-STROY@MAIL.RU</a>
                    </p>
                    <p>
                        МЫ ВКОНТАКТЕ
                    </p>
                </div>


            </div>
        </div>
    </v-footer>
</template>

<script>
    export default {
        name: "myfooter"
    }
</script>

<style scoped>
    .footer123{ padding: 0; margin: 0;
        background-color: black;
        width: 100%;
    }
    .footer123 a{ color: white;}
    .footer-el {
        display: inline-block;
        width: 50%;
    }
</style>