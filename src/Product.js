import React from "react";

class Product extends React.Component {

    renderTag(tag) {
        return (
            <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-blue-500 rounded-full">
                {tag}
            </span>
        );
    }
    render() {
        console.log(this.props)
        return (
            <div className="box-border border-4 border-white h-auto w-auto p-6 hover:border-4 hover:border-slate-500 pointer-events-auto"
                onClick={() => console.log("TODO : product clicked")}>
                <img className="rounded" src={this.props.image} alt="image" loading="lazy" />
                {this.props.tags.map((item) => this.renderTag(item))}
            </div>
        );
    }
}

export default Product;
