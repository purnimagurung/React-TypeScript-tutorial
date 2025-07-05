import { useParams } from 'react-router-dom';

const PopularCategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Category: {decodeURIComponent(categoryName)}
        </h1>
      {/* You can add logic to fetch or filter items based on the category */}
    </div>
  );
};

export default PopularCategoryPage;
