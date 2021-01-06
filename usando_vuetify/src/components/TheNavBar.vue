<template>
    <div>
        <v-app-bar color="deep-purple accent-4" dark prominent height="50">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn icon :to="{name: 'Home'}">
                <v-icon>fas fa-home</v-icon>
            </v-btn>
            <v-btn icon :to="{name: 'Estadisticas'}">
                <v-icon>analytics</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute bottom temporary >
            <v-list nav dense >
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4" >
                    <v-list-item :to="{name: 'Home'}">
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item :to="{name: 'Estadisticas'}">
                        <v-list-item-title>Estadisticas</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'TheNavBar',
    data() {
        return {
            drawer: false,
            group: null,
        }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

<style>

</style>