import { Component } from "react";
import Products from "./components/Productos";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

class App extends Component {
  state = {
    productos: [
      {
        name: "Tomate",
        price: 1.61,
        img: "/productos/tomate.jpg",
      },
      {
        name: "Arbejas",
        price: 2.69,
        img: "/productos/arbejas.jpg",
      },
      {
        name: "Lechuga",
        price: 0.5,
        img: "/productos/lechuga.jpg",
      },
    ],
    carro: [],
    esCarroVisible: false,
  };

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  agregarAlCarro = (producto) => {
    const {carro} = this.state
    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name ? ({...x,cantidad: x.cantidad+1}) : x)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto, cantidad: 1,
      })
    })
  }

  render() {
    console.log(this.state.carro)
    return (
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={this.state.esCarroVisible} 
          mostrarCarro={this.mostrarCarro} />
        <Layout>
          <Title />
          <Products
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
