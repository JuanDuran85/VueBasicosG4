Vue.component('tabla-componente',{
    template: `
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{{dato1.name}}</td>
                    <td>{{dato1.lastname}}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td v-text="dato2.name"></td>
                    <td v-text="dato2.lastname"></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{{dato3.name}}</td>
                    <td>{{dato3.lastname}}</td>
                </tr>
            </tbody>
        </table>
    `,
    data() {
        return {
            arreglo: [
                {name: 'Princess', lastname: 'Marvin',address: "12325 Kerluke Cliffs"},
                {name: 'Nikko', lastname: 'Volkman',address: "9038 Odell Mountain"},
                {name: 'Lawrence', lastname: 'Murray',address: "78430 Friesen Estates"},
                {name: 'Delaney', lastname: 'Bechtelar',address: "51310 Joelle Radial"},
            ],
            dato1: {
                name: 'Meagan',
                lastname: 'Braun',
            },
            dato2: {
                name: 'Abbigail',
                lastname: 'Tremblay',
            },
            dato3: {
                name: 'Ova',
                lastname: 'Konopelski',
            }
        }
    }
});

Vue.component('texto-component', {
    template: `
        <h3>Soy un componente sin data alguna</h3>
    `
});

const vm = new Vue({
    el: "#app",
    data: {
        datosParticipantes: "Datos de los participantes",
        datosGenerales1: {
            name: 'Meagan',
            lastname: 'Braun',
        },
        datosGenerales2: {
            name: 'Abbigail',
            lastname: 'Tremblay',
        },
        datosGenerales3: {
            name: 'Ova',
            lastname: 'Konopelski',
        }
    },
});