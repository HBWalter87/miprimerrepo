const { createApp } = Vue
console.log("Creando")
createApp({
    data() {
        return {
            productos: [],
            //url:'http://localhost:5000/productos',
            // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
            url: 'https://hbwalter87.pythonanywhere.com/productos', // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            nombre: "",
            imagen: "",
            stock: 0,
            precio: 0,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },

    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')