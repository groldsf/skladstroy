<template>
    <div class="size">
        <h1>{{type.name}} {{type.id}}</h1>  <!-- названия секций товаров-->
           <!--<h2>{{subtype.name}}</h2>-->
        {{selectTag.name}}
        <v-row>
            <v-col cols="3"  style="background-color: white" >
                <NavButtons :prop-tag="selectTag"/> <!--кнопки выбора товаров-->
            </v-col>
            <v-col style="background-color: aqua">
                <div class="catalog-list">
                    <v-row>
                        <ProductLink v-for="index in selectProducts" :key="index.id" :product-name="index.id"></ProductLink>
                    </v-row>
                </div>
            </v-col>
        </v-row>
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

        list-style: none;
        margin: 0 auto;
        align-content: center;
        text-align: center;


    }
    img{
        /*max-height: 300px;*/
    }
    a {
        text-decoration: none
    }

</style>