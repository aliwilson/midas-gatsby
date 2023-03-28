import React, { useCallback } from "react";
import { graphql } from "gatsby";
import { Box, Button, Flex, Image, Text } from "theme-ui";
import { loadFull } from "tsparticles";
import styled from "styled-components";
import Particles from "react-particles";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import mpsignature from "../components/icons/mpsignature.png";

import options from "./indexparticles";

const Section = styled(Box)``;

const HeaderSection = styled(Box)`
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #020202;
    opacity: 0.8;
  }
`;

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
  opacity: 0.35;
  z-index: 0;
`;

export default function Home({ data }) {
  const headerImage = data.headerImage.url;
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Layout overlaid={true}>
      <HeaderSection
        variant="styles.section"
        sx={{ backgroundImage: `url(${headerImage})` }}
      >
        <BgShade className="shade" />
        <Particles
          init={particlesInit}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          options={options}
        />
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            zIndex: 2,
          }}
        >
          <Box sx={{ maxWidth: 600, position: "relative" }}>
            <Flex
              sx={{
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Image
                src={mpsignature}
                sx={{ width: 400, userSelect: "none" }}
              />
              <Text as="p" mt={4} sx={{ fontSize: [14, 16, 18] }}>
                Grown from royal roots in the sun-soaked golden hills of
                Friuli-Venezia Giulia, Italy, Midas Prosecco combines
                generations of tradition with cutting-edge technology.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </HeaderSection>
      <Section variant="styles.section">asds</Section>
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
