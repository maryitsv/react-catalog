import './App.css';
import SearchParam from './SearchParam';
import React from 'react';
import Category from './Category';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterSelected: '',
      categories: [
        { key: 1, title: "uñas", description: "", image: "https://manicurayestilo.com/wp-content/uploads/2021/07/unas-bonitas-y-sencillas-678x381.jpg" },
        { key: 2, title: "cabello", description: "", image: "https://i.pinimg.com/564x/21/e7/48/21e748e0f8ef2fb7a8aa552457ff1a62.jpg" },
        { key: 3, title: "maquillaje", description: "", image: "https://looksantiago.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/01/14162217/maquillaje.jpg" }
      ],
    }
  }

  onCategoryClick(text) {
    this.setState({ filterSelected: text });
  }

  renderCategory(i) {
    return (
      <Category
        first={i === 0}
        last={i === (this.state.categories.length - 1)}
        selected={this.state.filterSelected === this.state.categories[i].title}
        key={this.state.categories[i].key}
        title={this.state.categories[i].title}
        onClick={this.onCategoryClick.bind(this, this.state.categories[i].title)}
      ></Category>
    );
  }

  render() {
    return (
      <div className="App pl-6 pr-6">
        <header className="pt-6 pb-6 ">
          <h1 className="text-3xl font-bold">Catalogo Karime</h1>
        </header>
        <main >
          <div className="grid grid-cols-3">
            {this.state.categories.map((item, i) => this.renderCategory(i))}
          </div>
          <SearchParam filterSelected={this.state.filterSelected} />
        </main>
      </div>
    );
  }
}

export default App;
