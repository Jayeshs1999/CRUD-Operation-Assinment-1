import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CreateButton from "./utils/CreateButton";
import { IconButton, Snackbar, Typography } from "@mui/material";
import VehicleCards from "./components/vehicleCards/VehicleCards";
import Filter from "./utils/Filter";

export const MyContext = createContext<any>({});
export const CreateVehicleContex = createContext<any>({});

function App() {
  const [vehiclesData, setVehiclesData] = useState<any>([]);
  const [open, setOpen] = React.useState(false);
  const [openFilter, setFilterOpen] = React.useState(false);
  const [updateData, setUpdatedData] = useState(null);
  const handleCreateButton = (formData: any) => {
    setVehiclesData((prevFormData: any) => [...prevFormData, formData]);
  };

  useEffect(() => {
  }, [vehiclesData]);

  const handleDeletedOrUpdatedCard = (id: number, type: string, data: any) => {
    if (type === "deleted") {
      const updatedItems = vehiclesData.filter((item: any) => item.id != id);
      setVehiclesData(updatedItems);
      setOpen(true);
    } else if (type === "updated") {
      setUpdatedData(data);
      setFilterOpen(true);
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        X
      </IconButton>
    </React.Fragment>
  );

  const getUpdatedVehicleData = (id: any, updatedVehicleData: any) => {
    const updatedItems = vehiclesData.map((item: any) => {
      if (item.id === id) {
        return { ...item, ...updatedVehicleData };
      }
      return item;
    });
    setVehiclesData(updatedItems);
    setFilterOpen(false);
  };

  return (
    <div className="App">
      <Navbar title="This is the First Assignment" />
      <CreateVehicleContex.Provider value={handleCreateButton}>
        <CreateButton
          justifyContent="end"
          padding="16px"
          iconWidth=""
          iconHeight=""
          color=""
        />
      </CreateVehicleContex.Provider>
      {vehiclesData.length === 0 ? (
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "50vh",
            alignItems: "center",
          }}
        >
          No Data Available
        </Typography>
      ) : (
        <MyContext.Provider value={handleDeletedOrUpdatedCard}>
          <VehicleCards vehicleData={vehiclesData} />
        </MyContext.Provider>
      )}
      <Snackbar
        open={open}
        color="success"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
      {openFilter && (
        <Filter
          data={updateData}
          type="update"
          handleFilterClose={(id: any, formData: any) =>
            getUpdatedVehicleData(id, formData)
          }
        />
      )}
    </div>
  );
}

export default App;
