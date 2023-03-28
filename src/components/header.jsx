import React from "react";
import { Box, Container, Flex, MenuButton, NavLink } from "theme-ui";
import styled from "styled-components";
import CartIcon from "./icons/Cart";

const NavBar = styled(Flex)``;

const Header = (props) => {
  const { overlaid } = props;
  return (
    <Box as="header">
      <Box variant={overlaid ? "styles.header.overlaid" : "styles.header"}>
        <Container px={["1.2rem", "2rem"]}>
          <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <MenuButton aria-label="Toggle Menu" />
            <NavBar as="nav" variant="styles.navbar">
              <NavLink href="#!">The Story</NavLink>
              <NavLink href="#!">Stockists</NavLink>
              <NavLink href="#!">Cocktails</NavLink>
              <NavLink href="#!">Shop</NavLink>
              <NavLink href="#!">Contact</NavLink>
            </NavBar>
            <Box sx={{ flexShrink: 0 }}>
              <CartIcon />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
