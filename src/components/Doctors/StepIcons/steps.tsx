import AdUnitsIcon from "@mui/icons-material/AdUnits";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import ScienceIcon from "@mui/icons-material/Science";
import { Box, styled, Typography } from "@mui/material";

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

export const steps: {
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
