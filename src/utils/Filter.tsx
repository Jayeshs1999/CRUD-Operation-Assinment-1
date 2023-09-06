import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CreateVehicleContex } from "../App";

interface FilterProps {
  data: any;
  handleFilterClose: (id: any, data: any) => void;
  type: string;
}

const Filter = (props: FilterProps) => {
  const createVehicle = useContext(CreateVehicleContex);
  const [formData, setFormData] = useState({
    vehicleName: "",
    description: "",
    price: "",
    id: `${uuidv4()}`,
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    if (props.type === "update") {
      setFormData({
        vehicleName: props.data.vehicleName,
        description: props.data.description,
        price: props.data.price,
        id: props.data.id,
      });
    }
  }, []);

  const handleClose = () => {
    props.handleFilterClose(props.data.id, formData);
  };

  useEffect(() => {
    setIsSubmitDisabled(!Object.values(formData).every((value) => value != ""));
  }, [formData]);

  const handleTexfieldsChanges = (event: any, name: any) => {
    const { value } = event.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleCreateClick = (e: any) => {
    e.preventDefault();
    createVehicle(formData);
    props.handleFilterClose(props.data.id, formData);
    setFormData({
      vehicleName: "",
      description: "",
      price: "",
      id: `${uuidv4()}`,
    });
  };

  const handleUpdateClick = (e: any) => {
    e.preventDefault();
    props.handleFilterClose(props.data.id, formData);
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Add Vehicle</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Enter vehicle name"
          type="email"
          fullWidth
          variant="outlined"
          required
          value={formData.vehicleName}
          onChange={(event) => handleTexfieldsChanges(event, "vehicleName")}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Description"
          type="email"
          fullWidth
          variant="outlined"
          required
          value={formData.description}
          onChange={(event) => handleTexfieldsChanges(event, "description")}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Price"
          type="email"
          fullWidth
          variant="outlined"
          required
          value={formData.price}
          onChange={(event) => handleTexfieldsChanges(event, "price")}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        {props.type === "update" ? (
          <Button
            variant="contained"
            disabled={isSubmitDisabled}
            color="primary"
            onClick={handleUpdateClick}
          >
            Update
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={isSubmitDisabled}
            color="primary"
            onClick={handleCreateClick}
          >
            Create
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Filter;
