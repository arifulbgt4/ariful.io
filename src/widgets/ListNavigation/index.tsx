import {
  ListItemIcon,
  ListItemText,
  //   MenuItem,
  MenuList,
  Paper,
  Link,
} from "@mui/material";

const ListNavigation = () => {
  return (
    <Paper
      //   elevation={0}
      sx={{
        // maxWidth: 400,
        position: "sticky",
        // left: 25,
        top: 40,
      }}
    >
      <MenuList>
        <Link href="/faqs">
          {/* <ListItemIcon></ListItemIcon> */}
          <ListItemText>Contact Me</ListItemText>
        </Link>
      </MenuList>
    </Paper>
  );
};

export default ListNavigation;
