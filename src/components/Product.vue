<template>
    <div class="wrap">
        <p>this is {{description[id].name}}</p>
        <ImgBlock :image="description[id].src"  class="imageSize"></ImgBlock>
        <TextBlock :text="description[id].html"></TextBlock>

    </div>
</template>

<script>
    import ImgBlock from "@/components/ImgBlock";
    import TextBlock from "@/components/TextBlock";
    import description from "@/productInfo/description";

    export default {
        name: "Product",
        data: function() {return{
            description
        }},
        props:['id'],
        components: {ImgBlock,
                     TextBlock,
        }
    }
</script>

<style scoped>
.TextBlock{color: white!important;}
.wrap {
    background-color: black;

}
table  {  border: 3px solid white }

</style>