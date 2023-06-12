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
  const isProd = process.env.NODE_ENV === 'production';
  const API_URL = !isProd ? process.env.DEV_URL : process.env.PROD_URL;
  const res = await fetch(`${API_URL}/places/${id}`);

  const placeDetail = await res.json();

  return {
    props: {
      placeDetail,
    },
  };
}
