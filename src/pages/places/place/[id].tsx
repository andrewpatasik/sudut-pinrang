import { useRouter } from "next/router";

export default function Place ({ placeDetail }: any) {
  const { name } = placeDetail
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      }, // See the "paths" section below
    ],
    fallback: false, // false or "blocking"
  }
}

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/places/${id}`);
  const placeDetail = await res.json();

  return {
    props: {
      placeDetail,
    },
  };
}
