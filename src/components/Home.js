import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";

class Home extends Component {
  render() {
    const products = [
      {
        id: 1,
        title: "Black Shark Bluetooth Earbuds Wireless",
        image: "images/smart-wifi.jpg",
        price: "250",
        old_price: "300",
        solde: true,
      },
      {
        id: 2,
        title: "Smart Watch, mebossco Fitness Tracker for Women Men",
        image: "images/smart-watch.jpg",
        price: "2000",
        old_price: "2500",
        solde: false,
      },
      {
        id: 3,
        title: "TP-Link AC1750 Smart WiFi Router",
        image: "images/61RW3L1+KEL._AC_SL1500_.jpg",
        price: "1500",
        old_price: "3000",
        solde: false,
      },
      {
        id: 4,
        title: "Magiacous Smart Light Bars, RGB Flow Gaming Light Bar",
        image: "images/smart-light-bar.jpg",
        price: "500",
        old_price: "",
        solde: false,
      },
      {
        id: 5,
        title:
          "Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01) ",
        image: "images/nintendo-switch.jpg",
        price: "3340",
        old_price: "",
        solde: false,
      },
      {
        id: 6,
        title:
          "PicassoTiles PTB120 120pcs Bristle Shape 3D Building Blocks Tiles ",
        image: "images/building-block.jpg",
        price: "300",
        old_price: "400",
        solde: false,
      },
      {
        id: 7,
        title: "Hanes Women's EcoSmart Crewneck Sweatshirt",
        image: "images/sweatshirt-women.png",
        price: "80",
        old_price: "120",
        solde: false,
      },
      {
        id: 8,
        title: "SDBING Women's Winter Super Soft Warm Cozy Fuzzy Fleece-Lined",
        image: "images/t9acher.png",
        price: "20",
        old_price: "30",
        solde: false,
      },
    ];

    const data = products.map((product) => {
      return (
        <div className="col-md-6 col-lg-4 col-xl-3">
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            old_price={product.old_price}
            solde={product.solde}
          />
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">{data}</div>
        </div>
      </div>
    );
  }
}

export default Home;
