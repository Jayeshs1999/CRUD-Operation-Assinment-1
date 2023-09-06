import { Box } from "@mui/material";
import React from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Filter from "./Filter";

interface CreateButtonProps {
  justifyContent: string;
  padding: string;
  iconHeight: string;
  iconWidth: string;
  color: string;
}
const CreateButton = (props: CreateButtonProps) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (event: any) => {
    setOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: props?.justifyContent || "end",
        padding: props?.padding || "16px",
        cursor: "pointer",
      }}
    >
      <Box onClick={handleClickOpen}>
        <AddBoxOutlinedIcon
          style={{
            height: props?.iconHeight || "40px",
            width: props?.iconWidth || "40px",
            color: props?.color || "#455a64",
          }}
        />
      </Box>
      {open && (
        <Filter
          type="create"
          handleFilterClose={() => setOpen(false)}
          data={""}
        />
      )}
    </Box>
  );
};

export default CreateButton;
