<template>
    <div id="mainPG">

        <main class="wrap">
            <section class="logo-big">
                <img src="pics/logo-big.svg" alt="ЛОГО" />
            </section>
            <section class="pluxi">
                <v-row >
                    <v-col>
                        <h3>БЕЗОПАСНОСТЬ</h3>
                        <i class="fa fa-shield fa-5x" aria-hidden="true"></i>
                    </v-col>
                    <v-col>
                        <h3>НИЗКИЕ ЦЕНЫ</h3>
                        <i class="fa fa-arrow-down fa-5x" aria-hidden="true"></i>
                    </v-col>
                    <v-col>
                        <h3>ДОЛГОВЕЧНОСТЬ</h3>
                        <i class="fa fa-university fa-5x" aria-hidden="true"></i>
                    </v-col>
                </v-row>
            </section>


            <section class="catalog">

                </div>



<!--                <div class="wrap-catalog">-->
<!--                    <ul class="catalog-list">-->
<!--                        <li class="catalog-item" ><a href="sklad-oborud/kolesa.html"><img src="pics/kolesa.jpg" alt="КОЛЕСНЫЕ ОПОРЫ" /></a></li>-->
<!--                        <li class="catalog-item" ><a href="#"><img src="pics/mebel.jpg" alt="МЕТАЛЛИЧЕСКАЯ МЕБЕЛЬ <br> И СТЕЛЛАЖИ" /></a></li>-->
<!--                        <li class="catalog-item" ><a href="#"><img src="pics/domkrat.jpg" alt="Грузоподъемное оборудование" /></a></li>-->
<!--                        <li class="catalog-item" ><a href="#"><img src="pics/stelagi.jpg" alt="Стеллажные системы хранения" /></a></li>-->
<!--                        <li class="catalog-item" ><a href="#"><img src="pics/metall.jpg" alt="МЕТАЛЛОКОНСТКУЦИИ" /></a></li>-->
<!--                        <li class="catalog-item" ><a href="#"><img src="pics/ventel.jpg" alt="Cистемы ветниляции" /></a></li>-->
<!--                    </ul>-->
<!--                </div>-->
            </section>

            <div class="collums">

                <section class="inform" id="about">
                    <h3>О нас</h3>
                    <p>
                        Предлагаем широкий ассортимент стеллажей, <br> комплектующих и другого складского оборудования. <br>
                        Услуги по монтажу, демонтажу, ремонту стеллажей <br>
                        и изготовлению металлических конструкций на заказ.


                    </p>
                </section>
                <section class="inform-right">

                    <p>
                        Наши менеджеры готовы помочь вам  <br>в процессе выбора и оказать <br>
                        любую необходимую помощь и консультации.
                    </p>
                    <p>
                        Позвоните <a href="tel:+79192334380"> +7-919-233-43-80</a> и наш менеджер Вас проконсультирует!
                    </p>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "mainPage"
    }
</script>

<style scoped>
ul{padding: 0px!important;}
/*.pluxi-list{margin: 0 auto}*/
.col{text-align: center}
    .inform{padding-top: 20px; margin-right: 10px}
    .inform-right{padding-top: 46px; padding-left: 10px;
    }

</style>