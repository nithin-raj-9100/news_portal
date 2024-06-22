import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const [article, setArticle] = useState({
    content: "",
    description: "",
    image: "",
    publishedAt: "",
    source: "",
    title: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  const baseURL = "https://gnews.io/api/v4/search";
  const apiKey = import.meta.env.VITE_API_KEY;

  // @ts-expect-error - TS doesn't know that id is a string
  const encodedQuery = encodeURIComponent(id);

  useEffect(() => {
    fetch(
      `${baseURL}?q=${encodedQuery}&lang=en&in=title&sortby=publishedAt&apikey=${apiKey}`,
    )
      // .then((data) => {
      //   if (!data.ok) {
      //     throw new Error("Error fetching article");
      //   }
      //   return data.json();
      // })
      .then((res) => res.json())
      .then((data) => {
        console.log("data is ", data);
        if (data.articles && data.articles.length > 0) {
          setArticle({
            content: data.articles[0].content,
            description: data.articles[0].description,
            image: data.articles[0].image,
            publishedAt: data.articles[0].publishedAt,
            source: data.articles[0].source,
            title: data.articles[0].title,
          });
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setError(true);
      });
  }, [apiKey, encodedQuery]);

  if (loading) return <Loading />;

  if (error) {
    return navigate("/");
  }

  return (
    <div>
      <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <h2 className="mb-2 text-xl font-semibold sm:text-2xl lg:text-3xl">
          {article.title}
        </h2>

        <p className="mb-4 text-base text-gray-700 sm:text-lg lg:text-xl">
          {article.description}
        </p>

        <img
          src={article.image}
          alt="article"
          className="mb-6 h-auto w-full rounded-lg shadow-md"
        />

        <p className="mb-4 text-base leading-relaxed text-gray-800 sm:text-lg lg:text-xl">
          {article.content}
        </p>

        <p className="text-sm text-gray-500 sm:text-base lg:text-lg">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};
export default Article;
