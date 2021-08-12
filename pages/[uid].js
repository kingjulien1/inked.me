import { PageLayout } from "components/layouts/PageLayout";
import { useRouter } from "next/dist/client/router";

export default function Profile() {
  const { uid } = useRouter().query;
  return (
    <PageLayout title={uid}>
      <h1 className="heading-1">{uid}</h1>
    </PageLayout>
  );
}
