import MainContent from "@/components/MainContent";
import Head from "next/head";

export default function Home({ items }: any) {
  return (
    <>
      <Head>
        <title>
          Kurasi Tempat Nongkrong Seru di Bumi Lasinrang | SUDUT PINRANG
        </title>
      </Head>
      <section className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <MainContent items={items} />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const isProd = process.env.NODE_ENV === 'production';
  const API_URL = !isProd ? process.env.DEV_URL : process.env.PROD_URL;
  const res = await fetch(`${API_URL}/places`);
  const items = await res.json();
  
  return {
    props: {
      items,
    },
  };
}
