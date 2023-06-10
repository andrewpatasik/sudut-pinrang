import PlaceDetail from "@/components/PlaceDetail";

export default function Place ({ placeDetail }: any) {
  return (
    <div>
      <PlaceDetail details={placeDetail} />
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/places/${id}`);
  const placeDetail = await res.json();

  return {
    props: {
      placeDetail,
    },
  };
}
