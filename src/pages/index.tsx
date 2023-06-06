import MainContent from "@/components/MainContent";
import Head from "next/head";

export default function Home({ item }: any) {
  return (
    <main>
      <Head>
        <title>
          Kurasi Tempat Nongkrong Seru di Bumi Lasinrang | SUDUT PINRANG
        </title>
      </Head>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <MainContent items={item} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/places`);
  const item = await res.json();

  return {
    props: {
      item,
    },
  };
}
