import RatingCount from "./RatingCount";

interface CardProps {
  item: {
    name: string;
    address: string;
    rating: string;
  };
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="flex flex-col my-4">
      <div className="flex space-x-1 justify-between">
        <h1>{item.name}</h1>
        <RatingCount ratingCount={parseInt(item.rating)} />
      </div>
      <p>{item.address}</p>
    </div>
  );
};

export default Card;
