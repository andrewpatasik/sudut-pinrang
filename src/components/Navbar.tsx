const Navbar = () => {
  return (
    <nav className="my-2">
      <ul className="flex space-x-2 justify-start">
        <li>Home</li>
        <li>Daftar</li>
        <li className="grow text-end">Tentang Kami</li>
      </ul>
    </nav>
  );
};

export default Navbar;
