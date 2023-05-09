import React from "react";
import { Box, Flex, Image, Container, NavLink } from "theme-ui";
import HeartIcon from "./icons/Heart";
import FaFacebookF from "@meronex/icons/fa/FaFacebookF";
import FaInstagram from "@meronex/icons/fa/FaInstagram";
import climate from "./icons/climate-positive.png";

const Footer = () => {
  return (
    <Box>
      <Box as="footer" variant="styles.footer">
        <Container>
          <Flex>
            <Image src={climate} width={140} mb={4} />
            <Box ml="auto">
              <FaFacebookF size="24" />
              <FaInstagram size="24" />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box variant="styles.footersmall">
        <Container>
          <Flex as="nav" variant="styles.navbar">
            <NavLink mr="auto" variant="footer" pl={[0, 0]}>
              © {new Date().getFullYear()} Midas Prosecco
            </NavLink>
            <NavLink href="/contact/" variant="footer">
              Contact
            </NavLink>
            <NavLink href="/shipping/" variant="footer">
              Shipping
            </NavLink>
            <NavLink href="/terms/" variant="footer">
              Terms
            </NavLink>
            <NavLink href="/privacy/" variant="footer" pr={[0, 0]}>
              Privacy
            </NavLink>
          </Flex>
          {/* <Flex>
            <Box ml="auto" mb={1} sx={{ fontSize: 9 }}>
              <Flex sx={{ color: "#7a7a7a", alignItems: "center" }}>
                <HeartIcon />
                <Box as="span" ml={1}>
                  Bournemouth, UK
                </Box>
              </Flex>
            </Box>
          </Flex> */}
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
