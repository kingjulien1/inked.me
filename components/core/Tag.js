import Link from "next/link";

/**
 * Component to render links that refer to artists-/shops pages
 *
 * @param {string} name of the artist/shop
 * @returns {Link}
 */
export function Tag({ name }) {
  return (
    <Link href={`/${name}`}>
      <a className="font-medium text-blue-600">@{name}</a>
    </Link>
  );
}
