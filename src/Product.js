import React from "react";

class Product extends React.Component {
    render() {
        return (
            <div className="box-border border-4 border-white h-auto w-auto p-6 hover:border-4 hover:border-slate-500 pointer-events-auto"
                onClick={() => console.log("TODO : product clicked")}>
                <img className="rounded" src={this.props.image} alt="image" loading="lazy" />
                <strong className="mb-6">{this.props.title}</strong>
            </div>
        );
    }
}

export default Product;
