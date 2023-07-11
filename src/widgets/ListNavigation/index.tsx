// Next
import { usePathname } from "next/navigation";
// @mui
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  menuItemClasses,
} from "@mui/material";
// Icons
import { ContactPageOutlined as ContactPageOutlinedIcon } from "@mui/icons-material";

const ListNavigation = () => {
  const pathName = usePathname();
  return (
    <MenuList disablePadding sx={{ px: 2 }}>
      <MenuItem
        href="/contact"
        selected={Boolean(pathName === "/contact")}
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
  );
};

export default ListNavigation;
