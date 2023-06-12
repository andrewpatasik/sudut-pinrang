import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import ErrorLayout from "@/components/ErrorLayout";
import { useRouter } from "next/router";

const ErrorServer500Page: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <section className="grow flex items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-8xl text-primary-600">
            500
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Internal Server Error.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Maaf server kami sedang mengalami kendala. Mohon coba kembali lagi{" "}
          </p>
          <button
            className="inline-flex text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center my-4"
            onClick={() => router.reload()}
          >
            Refresh
          </button>
        </div>
      </div>
    </section>
  );
};

ErrorServer500Page.getLayout = function getLayout(page: ReactElement) {
  return <ErrorLayout>{page}</ErrorLayout>;
};

export default ErrorServer500Page;
