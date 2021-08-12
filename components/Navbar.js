import { useEventListener } from "hooks/useEventListener";
import { signIn, useSession } from "next-auth/client";
import Link from "next/link";
import { useCallback, useState } from "react";

const callbackUrl = `https://localhost:3000/profile`;

export function Navbar() {
  const [session] = useSession();
  const [isAtTopOfPage, setIsAtTopOfPage] = useState(true);
  const scrollHandler = useCallback(() => setIsAtTopOfPage(window?.pageYOffset <= 0), [setIsAtTopOfPage]);
  useEventListener("scroll", scrollHandler);

  return (
    <nav
      className={[
        "py-2 px-4 flex justify-between text-sm sticky top-0 bg-white dark:bg-black transition-shadow z-10",
        isAtTopOfPage ? null : "shadow-md",
      ].join(" ")}
    >
      <div>
        <Link href="/">
          <a className="mr-4">Home</a>
        </Link>
        <Link href="/search">
          <a>Search</a>
        </Link>
      </div>
      {!session && (
        <button onClick={() => signIn("instagram", { callbackUrl })} className="text-blue-600 font-bold">
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
