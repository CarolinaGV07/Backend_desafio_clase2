class ProductManager {
    constructor () {    
        this.products = []
        this.id = 0
    }

    getId = () => {
        const counter = this.products.length
        const id = (counter > 0) ? this.products[counter - 1].id +1 :1

        return id
    }
    addProduct = (title, description,price,thumbnail,stock,code) => {

        if(!title || !description || !price || !thumbnail || !stock || !code){
            console.log("Se deben completar todos los campos")
            return false
        }

        const invalidCode = this.products.some((prod) => {return prod.code === code })
        if(invalidCode){
            console.log("El còdigo ingresado ya fue utilizado")
        }

            const product = {
                title,
                description,
                price,
                thumbnail,
                stock: stock || 1000,
                code,
                id: this.getId()    
            }

            this.products.push(product)

    }

    getProducts = () => { return this.products}


    getProductById = (productId) => {
        const getById = this.products.find((prod) => prod.id === productId);
        if(getById){
            console.log(getById)
        } else {
            console.error ("Not found")
        }
    }

}

    const product = new ProductManager()
    product.addProduct("Smart TV", "Tele 50'", 200000, "TVsmart.jpg", 3500, "ABC001")
    product.addProduct("Celular Samsung A12", "Telefono movil'", 95000, "CeluSamsungA12.jpg", 2000, "DEF002")
    product.addProduct("Heladera Patrick", "Heladera con freezer", 300000, " HeladeraPatrick.jpg",1500,"GHI003")
    product.addProduct("Lavarropas Coventry", "Lavarropas 6kg con carga frontal", 200000, "LavarropasCoventry6kg.jpg", 3500, "ABC001") //Codigo repetido de prueba
    product.addProduct("Heladera Gafa", "Heladera sin freezer",150000, " HeladeraGafa.jpg",1500,) //Faltante en el campo code para prueba 
    product.getProductById(1)
    product.addProduct("Producto prueba","Este es un producto prueba",200, "Sin imagen",25,"xyz123")
    console.log (product.getProducts())