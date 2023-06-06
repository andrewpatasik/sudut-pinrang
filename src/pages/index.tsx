import MainContent from "@/components/MainContent";
import Head from "next/head";

export default function Home({ items }: any) {
  return (
    <main className="mt-6 mb-24">
      <Head>
        <title>
          Kurasi Tempat Nongkrong Seru di Bumi Lasinrang | SUDUT PINRANG
        </title>
      </Head>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <MainContent items={items} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/places`);
  const items = await res.json();

  return {
    props: {
      items,
    },
  };
}
