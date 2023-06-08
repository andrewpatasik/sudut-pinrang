import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="my-2 bg-gray-200">
      <ul className="flex justify-start py-2 px-3">
        <li className="mr-4">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/daftar">Daftar</Link>
        </li>
        <li className="ml-auto">
          <Link href="/about">Tentang Kami</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
