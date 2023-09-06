import VehicleCard from "../../utils/card/VehicleCard";
import "./VehicleCards.css";
import { Box } from "@mui/material";

const VehicleCards = (props: any) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {props.vehicleData.map((data: any, index: any) => {
        return <VehicleCard key={index} data={data} />;
      })}
    </Box>
  );
};

export default VehicleCards;
