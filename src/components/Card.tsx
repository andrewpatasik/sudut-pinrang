interface CardProps {
  item: {
    name: string,
    address: string,
    rating: number
  };
}

const Card = ({ item }: CardProps) => {
  return <div>card</div>;
};

export default Card;
