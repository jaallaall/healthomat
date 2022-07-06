import { Grid } from "@mui/material";
import ToolbarCustom from "components/Doctors/Toolbar";
import { useState } from "react";
import { data } from "utils";
import CardDoctor from "./CardDoctor";
import Map from "./Map";

const DoctorsList: React.FC = (): React.ReactElement => {
  const [viewport, setViewport] = useState({
    latitude: 35.6892,
    longitude: 51.389,
  });
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Map setLatLong={setViewport} />
      </Grid>
      <Grid item md={8}>
        <ToolbarCustom />

        {data.map((item) => {
          return <CardDoctor key={item.id} data={item} />;
        })}
      </Grid>
    </Grid>
  );
};

export default DoctorsList;
