import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const [article, setArticle] = useState({
    content: "",
    description: "",
    image: "",
    publishedAt: "",
    source: "",
    title: "",
  });

  const { id } = useParams();
  const baseURL = "https://gnews.io/api/v4/search?q=";
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`${baseURL}${id}&lang=en&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle({
          content: data.articles[0].content,
          description: data.articles[0].description,
          image: data.articles[0].image,
          publishedAt: data.articles[0].publishedAt,
          source: data.articles[0].source,
          title: data.articles[0].title,
        });
      });
  });

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
