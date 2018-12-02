<template>
    <div>
        <div class="container">
            <div class="my-4 mx-2 text-center mb-5">
                <h1>DoTrip project</h1>
            </div>
        </div>
       <div class="row">
            <b-card border-variant="info" class="mx-5 mb-5 col">
                <div class="row">
                    <span class="xi-check-circle pb-2 h4"> My CheckList </span>  
                </div>
            </b-card>
            <b-card border-variant="info" class="mx-5 mb-5 col">
                <div class="row">
                    <span class="xi-check-circle pb-2 h4"> CheckList Content </span>  
                </div>
            </b-card>
       </div>
    </div>
</template>

<script>
export default {
    name:'Setting',
    data(){
        return {
            user: {
                name: "내가 갑이다"
            }
        }
    }
}
</script>

<style>

</style>
