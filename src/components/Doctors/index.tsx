import { Grid } from "@mui/material";
import { data } from "utils";
import RecipeReviewCard from "./Card";
import StepperIcon from "./Step";
import ToolbarCustom from "./Toolbar";

const Doctors: React.FC = (): React.ReactElement => {
  return (
    <>
      <StepperIcon />
      <ToolbarCustom />
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item md={4} key={item.id}>
              <RecipeReviewCard data={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Doctors;
