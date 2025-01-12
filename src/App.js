import Card from "./Card";
import "./styles.css";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "To: Astrid Cintya Ramadhani";
  }, []);

  return (
    <div className="App">
      <Card />
    </div>
  );
}
