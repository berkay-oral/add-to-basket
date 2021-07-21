import React, { Component } from 'react'
import './Uyari.css'

export class Uyari extends Component {
   

    constructor(props){
        super(props);
       
    }


  
    render() {

        const cardStyle = {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }




        return (  

            <section className="cardArea"   > 
            <div className="container " > 
            <div className="row  ">
                <div className="col-md-6 mx-auto" style={cardStyle}>
               <div className="card"    >
                    <div className="card-body">
                      <h3 className="card-title"> UYARI </h3>
                      <p>Bu ürün için maksimum adedine ulaştınız!</p>
                      <button onClick={this.props.tamam} className="btn btn-primary"> {this.props.tamam} TAMAM</button>
                    
                    </div>       
               </div>        
            </div>
        </div>
    </div>
    </section>
        )
    }
}

export default Uyari;
