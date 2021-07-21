import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Uyari from './Uyari';

export class Ekle extends Component {

     constructor(props){
         super(props);
         this.state = { urun :  1, 
                        goster: true,
                        urunFiyat : 5,
                        sepeteEkleGorunumu: false,
                        uyariGorunumu : true,
                

                   
                        }
          this.urunEkle = this.urunEkle.bind(this);
          this.urunCıkar = this.urunCıkar.bind(this);
          this.urunEkleGoster = this.urunEkleGoster.bind(this);


     }

       urunCıkar = () => {
          
           if(this.state.urun <=  1){
               this.setState( {goster : true} ) //eğer urun 0'a eşit ve ya 0 dan küçükse  goster  özelliği kapat
               this.setState( {sepeteEkleGorunumu : false} )
           }
           else{
               this.setState( { urun: this.state.urun - 1})//eğer değilse urunu 1 azalt
               this.setState( { urunFiyat:  this.state.urunFiyat - 5 } )
               this.setState( {uyariGorunumu : true} ) 
            
           }
       }
 
       urunEkle = () => {

        if(this.state.urun >= 5){
         
            this.setState( {uyariGorunumu : false} )   
         
 
        }
        else{
             this.setState( {urun: this.state.urun + 1} )

             this.setState( { urunFiyat:  this.state.urunFiyat + 5 })//her urun eklediğimde urun fiyatını 5 EKLE
           
           
        }
           
        }



        urunEkleGoster = () => {
            this.setState( {goster: false} )
            this.setState( {sepeteEkleGorunumu : true} )

        }

       tamam = () => {
        this.setState( {uyariGorunumu : true} )   
       }

    render(){

        const priceStyle = {
                      color: "blue",
                      fontWeight: "bold"
       
        }

        const pieceStyle = {
                    color: "blue",
                    fontWeight: "bold"
        }

  

        return (
            <div>



                <div className="container">
                      
                      <div className="row">
                        <div className="col-md-4 mx-auto ">
                            <div className="card mt-5 ">

                           
                                    <div style={{color:"purple", fontWeight:"700", fontSize:"25px"}} className="urunAdı">SÜT</div>

                                        <div className="img-card">
                                            <img src="sut.jpg"  className="img-fluid" width="250px"/>
                                            <p style={priceStyle}> <span>{this.state.urunFiyat}</span>  TL</p>
                                        </div>

                                    <br/>
                                    

                                    <button className="btn btn-primary" onClick={this.urunEkleGoster}  style={{display: `${this.state.sepeteEkleGorunumu == true ?"none" : "block" }`}}> SEPETE EKLE </button>


                                    <div style={{display: `${this.state.goster == true ?"none" :"block"}`}} className="urunEklemeAlani">

                                            <button className="btn btn-primary" onClick={this.urunCıkar}> - </button>
                                            <span style={pieceStyle}> {this.state.urun} ADET </span>
                                            <button className="btn btn-primary" onClick={this.urunEkle} > + </button>

                                    </div> 

                                    <div className="uyari" style={{display: `${this.state.uyariGorunumu == true  ?"none" :"block"}`}}  >
                                           <Uyari tamam={this.tamam}/>
                                    </div>
                                  


                          </div>
                      </div>

                      
                  </div>

                  
              </div>
            </div>
        )
    }
}

export default Ekle;


