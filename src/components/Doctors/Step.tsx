import { Box, Button, styled, Typography, useMediaQuery } from "@mui/material";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import { useSpringCarousel } from "react-spring-carousel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ScienceIcon from "@mui/icons-material/Science";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import AssignmentIcon from "@mui/icons-material/Assignment";

const BoxStyled = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  direction: "ltr",
  textAlign: "center",
  "& .MuiTypography-root": {
    marginTop: 12,
  },
});

const steps: {
  id: string;
  renderItem: React.ReactNode;
}[] = [
  {
    id: "1",
    renderItem: (
      <BoxStyled>
        <MedicalServicesIcon />
        <Typography>کمک در درمان</Typography>
      </BoxStyled>
    ),
  },
  {
    id: "2",
    renderItem: (
      <BoxStyled>
        <ContentPasteIcon />
        <Typography>نسخه من</Typography>
      </BoxStyled>
    ),
  },
  {
    id: "3",
    renderItem: (
      <BoxStyled>
        <ScienceIcon />
        <Typography>نتیجه آزمایش</Typography>
      </BoxStyled>
    ),
  },
  {
    id: "4",
    renderItem: (
      <BoxStyled>
        <AssignmentIcon />
        <Typography>کمک در درمان</Typography>
      </BoxStyled>
    ),
  },
  {
    id: "5",
    renderItem: (
      <BoxStyled>
        <MoreTimeIcon />
        <Typography>قرارهای من</Typography>
      </BoxStyled>
    ),
  },
  {
    id: "6",
    renderItem: (
      <BoxStyled>
        <AdUnitsIcon />
        <Typography>فرم بیمه</Typography>
      </BoxStyled>
    ),
  },
];

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
