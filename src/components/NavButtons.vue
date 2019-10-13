<template>
    <div class="buttons">               <!-- кнопки выбора товаров-->
        <ul class="navigation-list">
            <li> <button @click="selectTag.name='all'"> Все товары</button></li>
            <li> <button @click="selectTag.name='kolesa'" > Колесные опоры </button> </li>
            <li> <button @click="selectTag.name='stallazhi'" > Стеллажи </button>  </li>
            <li> <button @click="selectTag.name='mebel'" > Металлическая мебель </button> </li>
            <li> <button @click="selectTag.name='telega'" > Тележки и Штабелеры</button>  </li>
            <li> <button @click="selectTag.name='domkrat'" > Домкраты</button>  </li>
            <li> <button @click="selectTag.name='lebedka'" > Лебедки и краны</button>  </li>
            <li> <button @click="selectTag.name='metall'" > Металлоконструкции</button>  </li>
            <li> <button @click="selectTag.name='ventil'" > Вентиляция </button> </li>
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

    display: inline-block; padding: 10px 30px; margin-right: 16px;
    font: inherit;
    color: white;
    background-color: #000000;
    border: none;
    text-align: center;
    vertical-align: middle;

}
    .navigation-list{display: flex; margin: 0px; text-align: center;}
    .navigation-list a{padding: 14px 20px; display: block; color: white; background-color: black}
    .navigation-list a:hover,
    .navigation-list a:focus{background-color: #262626}
</style>