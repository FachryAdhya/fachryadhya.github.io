import Card from "./Card";
import "./styles.css";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "To: Maluf";
  }, []);

  return (
    <div className="App">
      <Card />
    </div>
  );
}
