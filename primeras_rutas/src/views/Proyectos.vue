<template>
    <div class="container">
        <h2>Proyectos realizados</h2>
        <p>Id del proyecto: {{idProyecto}}</p>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://conceptodefinicion.de/wp-content/uploads/2019/08/Computaci%C3%B3n-1.jpg" class="d-block w-100" alt="img1">
                </div>
                <div class="carousel-item">
                <img src="https://miro.medium.com/max/800/0*aH8YUI7nqAZ6b-V_.png" class="d-block w-100" alt="js">
                </div>
                <div class="carousel-item">
                <img src="https://www.arsys.es/blog/file/uploads/2020/04/01-vuejs.jpg" class="d-block w-100" alt="vue">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Proyectos',
        props: ['idProyecto']
    }
</script>

<style>

</style>