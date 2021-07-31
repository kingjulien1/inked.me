import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/search">
        <a>Search</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <button>Join</button>
    </nav>
  );
}
