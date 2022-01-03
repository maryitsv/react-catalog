import React from "react";

class Category extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}
                className={
                    `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6
                ${this.props.first ? "mr-3" : "ml-3"} ${this.props.last ? "ml-3" : "mr-3"}
                ${this.props.selected ? "bg-violet-700" : ""}`}>
                <strong className="mb-6">{this.props.title} {this.props.selected}</strong>
            </button>
        );
    }
}

export default Category;
