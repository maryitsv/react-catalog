import React from "react";
import Product from "./Product";

class SearchParam extends React.Component {
    state = {
        search: "",
        products: [
        ]
    };
    internalProducts = [
        { key: 1, title: "uñas", description: "uñas, rojo", image: "https://manicurayestilo.com/wp-content/uploads/2021/07/unas-bonitas-y-sencillas-678x381.jpg" },
        { key: 2, title: "uñas", description: "uñas, largo", image: "https://modaellas.com//wp-content/uploads/2020/05/unas-decoradas-de-manos-y-pies-2020-colores-pastel-unas-gelish-postizas.jpg" },
        { key: 3, title: "uñas", description: "uñas", image: "https://i.pinimg.com/550x/e5/86/48/e58648701d6ab03794d4683f45756a00.jpg" },
        { key: 4, title: "uñas", description: "uñas, azul", image: "https://www.okchicas.com/wp-content/uploads/2021/03/Ideas-para-manicura-aesthetic-17.jpg" },
        { key: 5, title: "uñas", description: "uñas, rojo", image: "https://www.okchicas.com/wp-content/uploads/2020/09/Unas-de-nubes-1.jpg" },
        { key: 9, title: "cabello", description: "cabello", image: "https://i.pinimg.com/564x/21/e7/48/21e748e0f8ef2fb7a8aa552457ff1a62.jpg" },
        { key: 10, title: "maquillaje", description: "maquillaje, matrimonio", image: "https://looksantiago.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/01/14162217/maquillaje.jpg" }
    ];

    constructor(props) {
        super(props);
    }

    // if we are using function we need to use useEffect hook
    async componentDidUpdate() {
        this.requestProducts();
    }
    async componentWillUpdate() {
        this.requestProducts();
    }

    async requestProducts() {
        /** TODO
         * call api to get the products
         * const response = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=dog`
        );
        const json = await response.json();

        const products = json.pets.map(item => {
            return {
                key: item.id,
                title: item.name,
                image: item.images[0]
            }
        }); */
        const products = this.internalProducts.filter(
            item => item.description.includes(this.state.search) &&
                item.description.includes(this.props.filterSelected));
        this.productChanged(products);
    }

    productChanged(products) {
        if (products.length != this.state.products.length) {
            this.setState({ products: products });
        } else {
            if (JSON.stringify(this.state.products) !== JSON.stringify(products)) {
                this.setState({ products: products });// if we are using functions we need to use useState hook
            }
        }
    }

    handleInputChange(e) {
        this.setState({ search: e.target.value });
    }

    handleSearch(e) {
        this.setState({ search: e.target.value });
    }

    renderProduct(i) {
        return (
            <Product
                key={this.state.products[i].key}
                title={this.state.products[i].title}
                description={this.state.products[i].description}
                image={this.state.products[i].image}
            ></Product>
        );
    }

    render() {
        return (
            <div>
                <div className="bg-gray-300 p-3 w-100 flex rounded">
                    <input
                        className="grow pt-1 pb-1 pr-3 pl-3 rounded"
                        type="text" value={this.state.search}
                        placeholder="Search"
                        onChange={this.handleInputChange.bind(this)}></input>
                    <button className="pl-6 pr-6 font-bold" onClick={() => this.setState({ search: '' })}>X</button>
                </div>
                <div>
                    <div className="grid grid-cols-3 pt-6">
                        {this.state.products.map((item, i) => this.renderProduct(i))}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchParam;