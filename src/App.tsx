import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const url = "https://newsapi.org/v2/everything?";

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  return (
    <>
      <Button>Click me</Button>
      {news.map((item) => (
        <div key={item.title}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
