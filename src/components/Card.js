import React, { Component } from "react";

class Card extends Component {
  render() {
    // id: 1,
    // title: "Black Shark Bluetooth Earbuds Wireless",
    // image: "images/smart-wifi.jpg",
    // price: "250",
    // old_price: "300",
    // solde: false,
    let solde;
    let old_price;
    if (this.props.solde === true) {
      solde = <span className="sale">SALE</span>;
    } else {
      solde = "";
    }
    if (this.props.old_price === "") {
      old_price = "";
    } else {
      old_price = <span className="old-price">{this.props.old_price}dh</span>;
    }
    return (
      <div className="product-card">
        <img src={this.props.image} className="product-img" alt="" />
        {solde}
        <div className="product-info">
          <p className="title">{this.props.title}</p>
          <div className="prices">
            <span className="price">{this.props.price}dh</span>
            {old_price}
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
