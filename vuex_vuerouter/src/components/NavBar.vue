<template>
    <div>
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a class="navbar-brand" href="#">32bits</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Inicio <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Busquedas'}">Búsquedas</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Ventas'}">Ventas</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Total'}">Total</router-link>
                </li>
            </ul>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style>

</style>