import { Button } from "@mui/material";
import { useContext } from "react";

import "./VehicleCard.css";
import { MyContext } from "../../App";
const VehicleCard = (props: any) => {
  const clickDeletedOrUpdatedCard = useContext(MyContext);
  return (
    <div className="card">
      <h2 className="vehicle-name">{props.data.vehicleName}</h2>
      <p className="description">{props.data.description}</p>
      <p className="description">
        <strong>Price :</strong>
        {props.data.price}
      </p>
      <div className="button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            clickDeletedOrUpdatedCard(props.data.id, "updated", props.data)
          }
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            clickDeletedOrUpdatedCard(props.data.id, "deleted", props.data)
          }
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default VehicleCard;
