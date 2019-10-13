<template>
    <router-link :to="{ path: '/product/'+productName}">
       <div class="itemList">
           <img :src="targetProduct.src" alt="">
            <p> {{targetProduct.name}}</p>
       </div>
    </router-link>
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
    padding-right: 20px;
    width: 270px;

}
.itemList img{height: 250px;}
a{
        text-decoration: none;
        color:white;
}


</style>