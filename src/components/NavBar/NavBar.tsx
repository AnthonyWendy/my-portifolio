import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skill</MenuItem>
        <MenuItem>Contact</MenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
