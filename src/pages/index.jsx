import React, { useCallback } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import { Box, Image } from "theme-ui";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import options from "./indexparticles";

const BgShade = styled.div`
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(248, 172, 8, 0.3) 0%,
    rgba(0, 0, 0, 0.43) 70%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(248, 172, 8, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 70%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(248, 172, 8, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 70%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4df8ac08', endColorstr='#00000000',GradientType=1 );
  position: absolute;
  left: 0%;
  top: 0%;
  height: 100%;
  width: 100%;
  opacity: 0.2;
`;

export default function Home({ data }) {
  const headerImage = data.headerImage.url;
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          "#tsparticles": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          },
        }}
      >
        <BgShade />
        <Particles
          init={particlesInit}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          options={options}
        />
        <Image src={headerImage} sx={{ display: "block", opacity: 0.15 }} />
      </Box>
    </Layout>
  );
}

export function Head() {
  return <Seo />;
}

export const query = graphql`
  query HeaderImage {
    headerImage: contentfulAsset(
      id: { eq: "ffbf89fe-2586-5adb-a7d6-1db013ef1600" }
    ) {
      id
      url
    }
  }
`;
