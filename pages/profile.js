import { Avatar } from "components/core/Avatar";
import { Tag } from "components/core/Tag";
import { PageLayout } from "components/layouts/PageLayout";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { ChevronDown, Settings } from "react-feather";

//dummy data
const shops = [
  {
    name: "hyperhumantt",
    image:
      "https://s3-alpha-sig.figma.com/img/f14c/deb1/a2e7f6934983e37cce8d6f485c8a6b22?Expires=1629676800&Signature=O8ysYd4UW~RwGPB8i3WKkk8Hn17FxNvSfTb4AwR0RqHQM2oIH8iTAvfQTY36Jbj0-78DyhMzq~Ud5mcbEE9J2QXqL9X0s03e8Wr8Q6PRonHa0EmeyrwpjpCDFiSxs0kScHS9veY6Qms~65EFvW3Zsc3Y9s-If2KkldtAiEo9mkEEjG-RJrTEUsF6fUWFqyxPCs0-nxeTsgIxJVjnpig0qXr9gzhJ9cZG8NWVrAC6RgC-7WM2AGRxHq1oyn4jFx--fFtj5qTWwR~Axtb~k-3EXpyTpr~tHVBObBFd~RsQefL7jyAPouB1Lej6QJ7bYmzDoItuMronSfgCuQyH3~WtlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "hyperhumantt",
    image:
      "https://s3-alpha-sig.figma.com/img/ece7/f392/bae9c821b3f2853e14ea953940c71897?Expires=1629676800&Signature=dcO0vQ~TAXBrh7cfnYAjtsb4BRImj8DinIzFQlvXJgC2ZWNyuG4GlV9GBOoOTsYv5JsDD2554AjLi9Kq2hxvdGEPY32jfJaqFcz2RmfMq6CzieOOUHhgh1ozeqbBN6qv20hgkNYtv2eNjAT4O3ByIybber26zneQ6-O1Y7CXYOcLqAMM~WSg4jk2H~Nv0L-HNQdAmOhdJ4YWqIrDexdsnT~ushaI0Shzng5~JC5Dl-qxxY28Qq6uABcWvnc7SLuYeKt58rFwvigKYTbSEt3moTpmFhMc~0LP5kNzn60Mgy7N5sFlqTKbP1JM-auML3pBwqGPRS-PYVwOWwi-uTS20Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

export default function Profile() {
  const [session, loading] = useSession();
  const { push } = useRouter();

  // redirect if not authenticated
  if (!loading && !session) {
    push("/");
    return null;
  }

  if (loading)
    return (
      <PageLayout title="loading">
        <p className="text-center">loading...</p>
      </PageLayout>
    );

  const { user } = session;

  return (
    <PageLayout title="profile">
      <header className="flex justify-between items-center">
        <div className="flex flex-row">
          <Avatar src={user.image} />
          <div className="ml-6">
            <h1 className="heading-1">{user?.name}</h1>
            <Tag name={user.name} />
          </div>
        </div>
        <Settings />
      </header>
      <section className="py-4 px-4 bg-gray-50 rounded-xl">
        <div className="flex justify-between">
          <h2 className="heading-2">Shops</h2>
          <button className="button">Add</button>
        </div>
        <ul className="py-6 mt-2 list-none grid space-y-6">
          {shops.map((shop, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex flex-row items-center">
                <Avatar src={shop.image} height={50} width={50} />
                <div className="ml-6">
                  <h3 className="text-xl font-medium capitalize">{shop?.name}</h3>
                  <Tag name={shop.name} />
                </div>
              </div>
              <ChevronDown />
            </li>
          ))}
        </ul>
      </section>
      <section className="py-4 px-4 bg-gray-100 rounded-xl">
        <div className="flex justify-between">
          <h2 className="heading-2">Shops</h2>
          <button className="button">Add</button>
        </div>
        <ul className="py-6 mt-2 list-none grid space-y-6">
          {shops.map((shop, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex flex-row items-center">
                <Avatar src={shop.image} height={50} width={50} />
                <div className="ml-6">
                  <h3 className="text-xl font-medium capitalize">{shop?.name}</h3>
                  <Tag name={shop.name} />
                </div>
              </div>
              <ChevronDown />
            </li>
          ))}
        </ul>
      </section>
      <section className="py-4 px-4 bg-gray-100 rounded-xl">
        <div className="flex justify-between">
          <h2 className="heading-2">Shops</h2>
          <button className="button">Add</button>
        </div>
        <ul className="py-6 mt-2 list-none grid space-y-6">
          {shops.map((shop, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex flex-row items-center">
                <Avatar src={shop.image} height={50} width={50} />
                <div className="ml-6">
                  <h3 className="text-xl font-medium capitalize">{shop?.name}</h3>
                  <Tag name={shop.name} />
                </div>
              </div>
              <ChevronDown />
            </li>
          ))}
        </ul>
      </section>
      <button onClick={signOut}>logout</button>
    </PageLayout>
  );
}
