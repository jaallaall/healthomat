import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useSpringCarousel } from "react-spring-carousel";
import { steps } from "./steps";

export default function StepperIcon() {
  const matches = useMediaQuery("(min-width:600px)");
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: matches ? 5 : 2,
      withLoop: true,
      items: steps,
    });

  return (
    <Box
      dir="ltr"
      sx={{
        display: "flex",
        maxWidth: 700,
        mx: "auto",
        mb: 3,
        "& .use-spring-carousel-main-wrapper": {
          overflow: "hidden",
        },
        "& .use-spring-carousel-item": {
          justifyContent: "center",
        },
      }}
    >
      <Button onClick={slideToPrevItem} color="inherit">
        <ChevronLeftIcon />
      </Button>
      {carouselFragment}
      <Button onClick={slideToNextItem} color="inherit">
        <ChevronRightIcon />
      </Button>
    </Box>
  );
}
