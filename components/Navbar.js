import Link from "next/link";
import { signIn, useSession } from "next-auth/client";

export function Navbar() {
  const [session] = useSession();

  return (
    <nav className="py-2 px-4 flex justify-between sticky">
      <div>
        <Link href="/">
          <a className="mr-4">Home</a>
        </Link>
        <Link href="/search">
          <a>Search</a>
        </Link>
      </div>
      {!session && (
        <button
          onClick={() => signIn("instagram", { callbackUrl: `https://localhost:3000/profile` })}
          className="text-blue-600 font-bold"
        >
          Join
        </button>
      )}
      {session && (
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      )}
    </nav>
  );
}
