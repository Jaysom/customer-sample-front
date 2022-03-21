import React from 'react';

class Details extends React.Component {
  constructor() {
    super()
    this.state = { products: [] }
  }

  componentDidMount() { 
    var productsRequest = new Request(`https://localhost:7068/api/Products/Products/`);
    let products = [];

    fetch(productsRequest)
    .then(response => response.json())
    .then(data => {
       this.setState({ products: data})
       console.log(data);
    })
  }

  render() {
    return (
      <div className="products">
        <h1>Products</h1>
        { this.state.products.map((product) => 
        <div className='card'>
            <p><span className="highlight">{product.productTypeName}</span> {product.name}</p>
        </div>
        )
        }
        </div>
  );
  }
}

export default Details;