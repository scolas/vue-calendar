<template>
    <div>
        <h1>Today Tuesday 4/21/20  </h1>
        <i id="weather"  class="fas fa-cloud-sun"></i>
        <hr>
    </div>
</template>
<script>
export default {
    name: "TodayHeader"
    
}
</script>
<style scoped>
#weather {
    bottom: 10px;
    right:10px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    display: inline-block;
}
h1{
    font-size: 1.57143rem;
    margin: 0;
    font-weight: 400;
    margin-block-start: 0.67em;
 
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}


</style>