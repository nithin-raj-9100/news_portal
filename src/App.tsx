import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  return (
    <>
      <Button>Click me</Button>
    </>
  );
}

export default App;
