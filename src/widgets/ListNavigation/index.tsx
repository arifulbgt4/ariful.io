import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Link,
  Box,
  menuItemClasses,
} from "@mui/material";

import { ContactPageOutlined as ContactPageOutlinedIcon } from "@mui/icons-material";

const ListNavigation = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 40,
        pr: 8,
      }}
    >
      <MenuList disablePadding>
        <MenuItem
          href="/faq"
          sx={{
            borderRadius: 2.5,
            [`&.${menuItemClasses.selected}`]: {
              color: (theme) => theme.palette.primary.main,
              "& svg": {
                color: (theme) => theme.palette.primary.main,
              },
            },
          }}
        >
          <ListItemIcon>
            <ContactPageOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Contact Me</ListItemText>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default ListNavigation;
