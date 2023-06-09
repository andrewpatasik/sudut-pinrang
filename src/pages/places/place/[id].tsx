import { useRouter } from "next/router";

const Place = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Tempat</h1>
      <p>{id}</p>
    </div>
  );
};

export default Place;
