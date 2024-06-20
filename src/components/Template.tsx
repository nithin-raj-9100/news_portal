import Card from "@/components/Card";
import { PaginationDemo } from "@/components/ui/MyPagination";

const Template = ({
  news,
}: {
  news: {
    content: string;
    description: string;
    image: string;
    title: string;
  }[];
}) => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {news.map((article) => (
            <Card
              description={article.description}
              image={article.image}
              title={article.title}
              key={article.title}
            />
          ))}
        </div>
      </div>
      <PaginationDemo />
    </div>
  );
};
export default Template;
