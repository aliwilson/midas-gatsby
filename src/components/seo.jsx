import React from "react";

export default function Seo({ children }) {
  return (
    <>
      <link id="fonts" rel="stylesheet" href="https://use.typekit.net/nzw1zvu.css" />
      {children}
    </>
  );
}
