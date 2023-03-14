import React from "react";
import { Box, Flex, NavLink } from "theme-ui";

const Header = () => {
  return (
    <Box as="header" variant="styles.header">
      <Flex as="nav" variant="styles.navbar">
        <NavLink href="#!">The Story</NavLink>
        <NavLink href="#!">Stockists</NavLink>
        <NavLink href="#!">Cocktails</NavLink>
        <NavLink href="#!">Shop</NavLink>
        <NavLink href="#!">Contact</NavLink>
      </Flex>
    </Box>
  );
};

export default Header;
