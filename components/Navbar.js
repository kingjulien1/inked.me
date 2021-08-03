import Link from "next/link";
import { signIn, useSession } from "next-auth/client";

export function Navbar() {
  const [session] = useSession();

  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/search">
        <a>Search</a>
      </Link>
      {!session && <button onClick={() => signIn("instagram")}>Join</button>}
      {session && (
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      )}
    </nav>
  );
}
