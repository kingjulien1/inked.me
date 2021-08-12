import Image from "next/image";

/**
 * Component to render user-profile-pictures with the optimized nextjs @type {Image} component
 *
 * @param {string} src source (url) to this image
 * @param {number} height of this image
 * @param {number} width of this image
 * @param {string} alt alternative text to show if resource cannot be found
 * @returns {Image} component
 */
export function Avatar({ src, height = 60, width = 60, alt = "image not found" }) {
  return <Image src={src} height={height} width={width} alt={alt} className="object-cover rounded-xl" layout="fixed" />;
}
