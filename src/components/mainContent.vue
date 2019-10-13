<template>
    <div class="size">
        <h1>{{type.name}} {{type.id}}</h1>  <!-- названия секций товаров-->
           <!--<h2>{{subtype.name}}</h2>-->
        <NavButtons :prop-tag="selectTag"/> <!--кнопки выбора товаров-->
                 {{selectTag.name}}
        <div class="catalog-list">
            <div class="azaz">
                <ProductLink v-for="(index,i) in selectProducts" :key="index.id" :product-name="index.id"></ProductLink>
            </div>
        </div>

    </div>
</template>

<script>

 import NavButtons from "@/components/NavButtons";
 import ProductLink from "@/components/ProductLink";
 import description from "@/productInfo/description";

 export default {
     name: "mainContent",
     props: ["type","subtype"],

     components: {
         NavButtons,
         ProductLink,
     },
     data: function () {
         return{
            description,
            selectTag:{
                name:"all",
            }
         }
     },
     computed:{
         selectProducts:function () {
             let array=[];
             for (let key in description) {
                 if (description[key].tags.has(this.selectTag.name)) {
                     array.push({
                         id:key,
                         product:description[key]
                     });
                 }
             }
             return array;
         }
     }
 }
</script>

<style scoped>
    h1  {
    text-align: center;
    }
    .catalog-list {
        /*display: flex;*/
        /*flex-wrap: wrap;*/
        /*align-content: flex-start;*/
        list-style: none;
        margin: 0 auto;
        align-content: center;
        align-items: center;
        text-align: center;

    }
    img{
    max-height: 300px
    }
    a {
    text-decoration: none
    }
    .azaz{
        margin: 0 auto;
        display: inline-flex;
        flex-wrap: wrap;



    }

</style>