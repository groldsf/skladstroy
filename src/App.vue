<template>
  <div>
    <navig/>

    <div class="wrap"><router-view/></div>


    <myfooter/>
  </div>

 </template>



<script>
import navig from "@/components/navig";
import myfooter from "@/components/myfooter";

export default {
  name: 'app',



  components: {
    navig,
    myfooter,


  }
}
</script>

<style>

</style>
