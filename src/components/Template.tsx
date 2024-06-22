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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {news.map((article) => (
            <div className="flex flex-grow justify-center" key={article.title}>
              <Card
                description={article.description}
                image={article.image}
                title={article.title}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <PaginationDemo />
      </div>
    </div>
  );
};
export default Template;
