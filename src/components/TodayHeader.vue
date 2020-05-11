<template>
    <div id="headerContainer">
        <div id="dateHeader">
            <p>Today Tuesday 4/21/20<i id="weather"  class="fas fa-cloud-sun"></i></p>
        </div>
        <div id="addheader">
           <a v-bind:is-published="true" @click="dialog = true"><i class="fas fa-plus-circle"></i></a> 
        </div>
        <br>
    </div>
</template>
<script>
export default {
    name: "TodayHeader",
    props: ['dialog'],
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
#headerContainer{
    width: 100%;
    height: 150px;
}
#dateHeader{
    width: 78%;
    float: left;
}
#addHeader{
    width: 19%;
}

</style>