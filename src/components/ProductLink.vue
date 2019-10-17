<template>
    <v-col cols="4" class="itemList">
        <router-link :to="{ path: '/product/'+productName}">
            <div>
                <img :src="targetProduct.src" alt="">
                <p> {{targetProduct.name}}</p>
            </div>
        </router-link>
    </v-col>
</template>

<script>

    import description from "@/productInfo/description";

    export default {
        name: "ProductLink",
        props:['productName'],
        data: function () {
            return {
                targetProduct:{}
            }
        },
        created() {
            this.targetProduct=description[this.productName];
        }
    }
</script>

<style scoped>

.itemList{
    /*margin:0 auto;*/
    /*padding-right:20px ;*/
    /*width: 270px;*/
    background-color: chartreuse;
}
.itemList img{
    /*width: 250px;*/
    /*width: 100%;*/
    max-width: 100%;
    max-height: 250px;
}
a{
        text-decoration: none;
        color:white;

}


</style>