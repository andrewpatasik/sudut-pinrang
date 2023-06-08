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
    formState: { errors },
  } = useForm<SubmitPlaceInputs>();

  const onSubmit: SubmitHandler<SubmitPlaceInputs> = ({ name }) => {
    console.log(name);
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
            />
          </div>

          <div className="w-1/4 mt-4">
            <button className="w-full bg-teal-500 py-2.5">Daftar</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SubmitPlace;
