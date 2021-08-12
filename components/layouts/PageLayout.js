import Head from "next/head";
import React from "react";

/**
 * Basic Layout component to be used as base layout for every page
 * includes head for title/seo
 * @param {string} title of the page for browser title bar
 * @param {React.Component} children elements for this page
 * @returns {React.ReactFragment} Head/<main/> tag as Fragment
 */
export function PageLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>inked.me | {title || ""}</title>
      </Head>
      <main className="py-8 px-8 w-full flex justify-center">
        <div className="container max-w-xl grid grid-rows-1 space-y-10">{children}</div>
      </main>
    </>
  );
}
