import Card from "../Card";

interface IMainContentProps {
  items: { name: string; address: string; rating: 0 | 1 | 2 | 3 | 4 | 5 }[];
}

const MainContent = ({ items }: IMainContentProps) => {
  const renderMainContentCard = () => {
    if (Array.isArray(items) && items.length < 1) {
      return <div className="mx-auto">Belum ada data.</div>;
    }

    return items.map((item, index) => <Card key={index} item={item} />);
  };

  return <div className="flex flex-col">{renderMainContentCard()}</div>;
};

export default MainContent;
