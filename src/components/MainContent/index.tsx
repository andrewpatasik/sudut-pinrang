import Card from "../Card";

interface IMainContentProps {
  items: { name: string; address: string; rating: string }[];
}

const MainContent = ({ items }: IMainContentProps) => {
  const renderMainContentCard = () => {
    if (Array.isArray(items) && items.length < 1) {
      return <div>Belum ada data.</div>;
    }

    return items.map((item, index) => <Card key={index} item={item} />);
  };

  return <div className="flex flex-col grow">{renderMainContentCard()}</div>;
};

export default MainContent;
