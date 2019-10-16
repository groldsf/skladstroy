<template>
    <div class="buttons">               <!-- кнопки выбора товаров-->
        <ul class="navigation-list">
<!--            <v-btn>213</v-btn>-->
            <li> <v-btn @click="selectTag.name='all'"> Все товары</v-btn></li>
            <li> <v-btn @click="selectTag.name='kolesa'" > Колесные опоры </v-btn> </li>
            <li> <v-btn @click="selectTag.name='stellazh'" > Стеллажи </v-btn>  </li>
            <li>
                <v-btn @click="selectTag.name='systemxran'" >
                        Стеллажные системы хранения
                </v-btn>
            </li>
            <li> <v-btn @click="selectTag.name='mebel'" > Металлическая мебель </v-btn> </li>
            <li> <v-btn @click="selectTag.name='telega'" > Тележки и Штабелеры</v-btn>  </li>
            <li> <v-btn @click="selectTag.name='domkrat'" > Домкраты</v-btn>  </li>
            <li> <v-btn @click="selectTag.name='lebedka'" > Лебедки и краны</v-btn>  </li>
            <li> <v-btn @click="selectTag.name='metall'" > Металлоконструкции</v-btn>  </li>
            <li> <v-btn @click="selectTag.name='ventil'" > Вентиляция </v-btn> </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavButtons",
        props: ["propTag"],
        data: function () {
            return{
                selectTag:""
            }

        },
        created() {
            this.selectTag=this.propTag;
        }
    }
</script>

<style scoped>
    h1  {text-align: center;}
    button{
        /*!*display: inline-block; */
        padding: 10px 30px!important;
        margin-bottom: 16px!important;
        font: inherit;
        /*color: white;*/
        /*background-color: #000000;*/
        /*border: none;*/
        text-align: center;
        vertical-align: middle;
        width: 100%;
        display: block !important;
        white-space: normal!important;
        height: auto!important;
    }

    .navigation-list {
        /*display: flex;*/
        display: block;
        /*flex-wrap: wrap;*/
        margin: 0;
        text-align: center;
        padding: 0;
    }
    .navigation-list a{padding: 14px 20px; display: block; color: white; background-color: black}
    .navigation-list a:hover,
    .navigation-list a:focus{background-color: #262626}
</style>