import Link from "next/link";

const Navigation = () => {
  return (
    <div class="nav-container">
      <Link href="/" class="logo">
        <img src="./logo.png" alt="logospider" width="35px" />
        <h2>SPIDER-MAN</h2>
      </Link>

      <nav className="navigacion">
        <ul className="menu">
          <li className="menu-item">
            <Link href="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link href="#">Comics</Link>
          </li>
          <li className="menu-item">
            <Link href="#">Peliculas</Link>
          </li>
          <li className="menu-item">
            <Link href="#">Videojuegos</Link>
          </li>
          <li className="menu-item">
            <Link href="https://www.marvel.com/" target="_blank">MARVEL</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
