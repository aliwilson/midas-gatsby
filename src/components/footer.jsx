import React from "react";
import { Box, Flex, Container, NavLink } from "theme-ui";
import HeartIcon from "./icons/Heart";

const Footer = () => {
  return (
    <Box as="footer" variant="styles.footer">
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <NavLink href="/contact/" variant="footer">
            Contact
          </NavLink>
          <NavLink href="/shipping/" variant="footer">
            Shipping
          </NavLink>
          <NavLink href="/terms/" variant="footer">
            Terms
          </NavLink>
          <NavLink href="/privacy/" variant="footer">
            Privacy
          </NavLink>
          <Box>
            <Flex>
              <HeartIcon />
              Bournemouth, UK
            </Flex>
            <Box sx={{ p: 2 }}>
              UK COMPANY: 12253208 - © {new Date().getFullYear()} Midas Prosecco
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
