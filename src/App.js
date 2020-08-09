//Testing Feature branch
import React,{Component} from 'react';
import data from './data.json';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      product: data.products,
      size: "",
      sort: ""
    }
  }
   render(){
     return(
      <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main"> Products </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>
        All right is reserved!
      </footer>
    </div>
     )
   }
}

export default App;
