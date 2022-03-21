import React from 'react';


class List extends React.Component {
  constructor() {
    super()
    this.state = { customers: [] }
  }

  componentDidMount() { 
    var customerRequest = new Request(`https://localhost:7068/api/Customers`);
    let customers = [];

    fetch(customerRequest)
    .then(response => response.json())
    .then(data => {
       this.setState({ customers: data})
       console.log(data);
    })
  }

  handleClick(customerId) {
    console.log(customerId);
    fetch(`https://localhost:7068/api/Products/Products/`+customerId)
    .then(res => {
      console.log(res);
    return (<p><span className="highlight">{res.productTypeName}</span> {res.name}</p>)
    });
  }

  render() {
    return (
      <div className="customer">
        <h1>Customers</h1>
        { this.state.customers.map((customer) => 
        <div className='card'>
          <p><span className="highlight">Given Name</span> {customer.givenName}</p>
          <p><span className="highlight">Family Name</span> {customer.familyName}</p>
          <p><span className="highlight">{customer.docType}</span> {customer.docNum}</p>
          <p><span className="highlight">Email:</span> {customer.email}</p>
          <p><span className="highlight">Phone:</span> {customer.phone}</p>
          <button onClick={(e) => this.handleClick.bind(customer.Id)}> Customer Products</button>
        </div>
        )
        }
        </div>
  );
  }
}

export default List;
