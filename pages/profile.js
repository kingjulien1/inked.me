import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

export default function Profile() {
  const [session, loading] = useSession();
  const { push } = useRouter();

  // redirect if not authenticated
  if (!loading && !session) {
    push("/");
    return null;
  }

  if (loading) return <p>loading...</p>;
  return (
    <>
      <h1>Hello {session?.user?.name}</h1>
      <button onClick={signOut}>logout</button>
    </>
  );
}
