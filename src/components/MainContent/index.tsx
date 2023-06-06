import Card from "../Card";

interface IMainContentProps {
  items: { name: string; address: string; rating: number }[];
}

const MainContent = ({ items }: IMainContentProps) => {
  const renderMainContentCard = () => {
    if (Array.isArray(items) && items.length < 1) {
      return <div>No data found.</div>;
    }

    return items.map((item, index) => <Card key={index} item={item} />);
  };

  return <div className="flex flex-col">{renderMainContentCard()}</div>;
};

export default MainContent;
