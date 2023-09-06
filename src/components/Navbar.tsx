import { Box, Typography } from "@mui/material";

interface NavbarProps {
  title: string;
}

const Navbar = (props: NavbarProps) => {
  return (
    <Box
      sx={{
        background: "#455a64",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90px",
      }}
    >
      <Typography variant="h4" color="white">
        {props.title}
      </Typography>
    </Box>
  );
};

export default Navbar;
