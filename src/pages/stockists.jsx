// import React, { useEffect, useRef } from "react";
// import { createStoreLocatorMap, StoreLocatorMap } from "@gocrisp/store-locator";

// const Stockists = () => {
//   const mapRef = useRef();

//   useEffect(() => {
//     createStoreLocatorMap({
//       container: mapRef,
//       loaderOptions: { apiKey: "AIzaSyCOzKpogwdeRFDb_uz5oxSqc4Z2j_3JTpw" },
//       geoJson: "sample.json",
//       mapOptions: { center: { lat: 52.632469, lng: -1.689423 }, zoom: 7 },
//       formatLogoPath: (feature) =>
//         `img/${feature
//           .getProperty("store")
//           .toLowerCase()
//           // remove after 2nd space
//           .split(" ")
//           .slice(0, 2)
//           .join("")
//           // remove special characters
//           .replace(/[^a-z0-9]/g, "")}.png`,
//       searchBoxOptions: {
//         autocompleteOptions: {
//           componentRestrictions: { country: "gb" },
//         },
//       },
//       storeListOptions: {
//         filterFn: (_, i) => i < 12,
//         unitSystem: "metric",
//       },
//     });
//   }, []);
//   return <div id="map-container" ref={mapRef} />;
// };

// export default Stockists;
