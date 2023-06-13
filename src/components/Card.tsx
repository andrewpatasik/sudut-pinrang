import RatingCount from "./RatingCount";
import Link from "next/link";

interface CardProps {
  item: {
    _id: string;
    name: string;
    address: string;
    rating: string;
  };
}

const Card = ({ item }: CardProps) => {
  return (
    <div>
      <div className="flex flex-col my-4">
        <div className="flex space-x-1 justify-between">
          <Link href={`/places/place/${item._id}`}>
            <h1>{item.name}</h1>
          </Link>
          <RatingCount ratingCount={parseInt(item.rating)} />
        </div>
        <p>{item.address}</p>
      </div>
    </div>
  );
};

export default Card;
