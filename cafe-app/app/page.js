"use client";

import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import ItemCard from "../components/ItemCard";
import styles from "./page.module.css";

export default function Home() {
  let drinks = [
    {
      name: "Espresso",
      image: "/assets/espresso.png",
      price: 2.5,
      description: "Strong and concentrated coffee",
    },
    {
      name: "Cappuccino",
      image: "/assets/cappuccino.png",
      price: 3.0,
      description: "Espresso with steamed milk and a layer of froth",
    },
    {
      name: "Latte",
      image: "/assets/latte.png",
      price: 3.5,
      description: "Espresso with steamed milk",
    },
    {
      name: "Mocha",
      image: "/assets/mocha.png",
      price: 3.5,
      description: "Espresso with chocolate and steamed milk",
    },
    {
      name: "Coffee",
      image: "/assets/coffee.png",
      description: "Your classic coffee!",
      price: 2.0,
    },
    {
      name: "Tea",
      image: "/assets/tea.png",
      price: 2.0,
      description: "A refreshing cup of tea",
    },
  ];
  let foods = [
    {
      name: "Sandwich",
      image: "/assets/sandwich.png",
      price: 5.0,
      description: "A delicious sandwich",
    },
    {
      name: "Bagel",
      image: "/assets/bagel.png",
      price: 3.5,
      description: "Freshly baked bagel",
    },
    {
      name: "Donut",
      image: "/assets/donut.png",
      price: 2.0,
      description: "A sweet and tasty donut",
    },
    {
      name: "Muffin",
      image: "/assets/muffin.png",
      price: 2.5,
      description: "A freshly baked muffin",
    },
    {
      name: "Pastry",
      image: "/assets/pastry.png",
      price: 3.0,
      description: "Delicious pastry",
    },
    {
      name: "Cookie",
      image: "/assets/cookie.png",
      price: 1.5,
      description: "A yummy cookie",
    },
    {
      name: "Cake",
      image: "/assets/cake.png",
      price: 4.0,
      description: "A slice of cake",
    },
    {
      name: "Egg Tart",
      image: "/assets/eggtart.png",
      price: 2.5,
      description: "A delightful egg tart",
    },
    {
      name: "Croissant",
      image: "/assets/croissant.png",
      price: 3.0,
      description: "Freshly baked croissant",
    },
  ];

  const [cart, updateCart] = useState([]);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.toppadding}></div>
      <div className={styles.section}>Drinks</div>
      <div className={styles.items}>
        {drinks.map((drink) => {
          let item = { name: drink.name, description: "hello", price: "$3.00" };
          return (
            <div className={styles.item} key={drink.name}>
              <ItemCard item={drink} updateCart={updateCart} />
            </div>
          );
        })}
      </div>
      <div className={styles.section}>Food</div>
      <div className={styles.items}>
        {foods.map((food) => {
          return (
            <div className={styles.item} key={food.name}>
              <ItemCard item={food} updateCart={updateCart} />
            </div>
          );
        })}
      </div>
      <div className={styles.bottompadding}></div>
      <Cart cart={cart} updateCart={updateCart} />
      <Footer />
    </main>
  );
}
