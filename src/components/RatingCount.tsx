import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

interface IRatingCountProps {
  ratingCount: number;
}

const RatingCount = ({ ratingCount }: IRatingCountProps) => {
  const starTotal = Array.from(Array(5).keys());
  const starCount = Array.from(Array(ratingCount).keys());

  const renderRatingCount = () => {

    return starTotal.reduce((collection: any, currentItem, index) => {
      if (currentItem === starCount[currentItem])
        return (collection = [
          ...collection,
          <StarIconSolid key={index} className="w-4 h-4 text-yellow-400" />,
        ]);

      return (collection = [
        ...collection,
        <StarIconOutline key={index} className="w-4 h-4 text-gray-400" />,
      ]);
    }, []);
  };

  return <div className="flex">{renderRatingCount()}</div>;
};

export default RatingCount;
