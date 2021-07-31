import { useRouter } from "next/dist/client/router";

export default function Profile() {
  const { uid } = useRouter().query;
  return <h1>Profile for {uid}</h1>;
}
