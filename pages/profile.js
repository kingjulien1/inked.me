import { signOut, useSession } from "next-auth/client";

export default function Profile() {
  const [session, loading] = useSession();

  if (loading) return <p>loading...</p>;
  return (
    <>
      <h1>Hello {session?.user?.name}</h1>
      <button onClick={signOut}>logout</button>
    </>
  );
}
