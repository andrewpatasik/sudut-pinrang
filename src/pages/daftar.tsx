import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";

type SubmitPlaceInputs = {
  name: string;
  address: string;
  rating: string;
};

const SubmitPlace = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubmitPlaceInputs>();

  const onSubmit: SubmitHandler<SubmitPlaceInputs> = ({
    name,
    address,
    rating,
  }) => {
    const addNewPlace = async () => {
      const res = await fetch("http://localhost:3000/api/places", {
        method: "POST",
        body: JSON.stringify({ name, address, rating }),
      });

      const data = await res.json();
      return data;
    };

    addNewPlace().then((res) => {
      reset();
    });
  };

  return (
    <div>
      <Head>
        <title>
          Kurasi Tempat Nongkrong Seru di Bumi Lasinrang | SUDUT PINRANG
        </title>
      </Head>
      <section>
        <h1 className="text-2xl mb-4">Daftar Tempat Nongkrong</h1>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-1 mb-2 w-2/3">
            <label className="text-lg">Nama</label>
            <input
              className="px-2.5 py-2 border border-black"
              type="text"
              {...register("name", { required: true })}
              placeholder="nama tempat/restoran/kedai..."
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col space-y-1 mb-2 w-2/3">
            <label className="text-lg">Alamat</label>
            <input
              className="px-2.5 py-2 border border-black"
              type="text"
              {...register("address", {
                required: true,
              })}
              placeholder="jalan jend sudirman..."
              autoComplete="off"
            />
          </div>

          <div>
            <input
              className="px-2.5 py-2 border border-black"
              type="text"
              {...register("rating", {
                value: "5",
                required: true,
              })}
              hidden={true}
            />
          </div>

          <div className="w-1/4 mt-4">
            <button className="w-full bg-teal-500 hover:bg-teal-400 py-2.5">
              Daftar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SubmitPlace;
