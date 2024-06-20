import Loading from "@/components/Loading";
import Template from "@/components/Template";
import { useEffect, useState } from "react";
import { News } from "types/types";

const Science = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/top-headlines?category=science&lang=en&apikey=${import.meta.env.VITE_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Template news={news} />
    </div>
  );
};
export default Science;
