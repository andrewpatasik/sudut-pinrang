interface CardProps {
  item: {
    name: string;
    address: string;
    rating: number;
  };
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-2">
        <h1>{item.name}</h1>
        <span>{item.rating}</span>
      </div>
      <p>{item.address}</p>
    </div>
  );
};

export default Card;
