import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <Card
          img="https://edu.ieee.org/br-ufcgras/wp-content/uploads/sites/243/computacao-quantica.png"
          title="Interface Intuitiva"
          desc="Design simples e fácil de usar."
        />

        <Card
          img="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
          title="Experiência Fluida"
          desc="Navegação rápida e eficiente."
        />

        <Card
          img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
          title="Responsividade"
          desc="Funciona em qualquer dispositivo."
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Button text="Saiba Mais" />
        
      </div>
    </div>
  );
}

export default App;