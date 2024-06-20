import Loading from "@/components/Loading";
import Template from "@/components/Template";
import { useEffect, useState } from "react";
import { News } from "types/types";

const Business = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/top-headlines?category=world&lang=en&apikey=${import.meta.env.VITE_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.errors[0]);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Template news={news} />
    </div>
  );
};
export default Business;
