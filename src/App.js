import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const hex = "0123456789ABCDEF";
  function generateRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * hex.length)];
    }
    return color;
  }

  const [colors, setColors] = useState([]);
  useEffect(() => {
    setColors(() => {
      const newColors = [];
      for (let i = 0; i < 30; i++) {
        newColors.push(generateRandomColor());
      }
      return newColors;
    });
  }, []);

  return (
    <div className="App">
      {colors.length > 0 &&
        colors.map((color, index) => <Card key={index} hexcode={color} />)}
    </div>
  );
}

export default App;
