import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import MuiSwitch, { SwitchProps } from "@mui/material/Switch";
import { useNextQueryParams } from "hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { memo } from "react";
import { removeUndefined } from "utils";

const StyledSwitch = styled((props: SwitchProps) => (
  <MuiSwitch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
  />
))(({ theme }: any) => ({
  width: 55,
  height: 30,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(25px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.success.main,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: theme.palette.info.light,
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 25,
    height: 25,
    boxShadow: "none",
  },
  "& .MuiSwitch-track": {
    borderRadius: 30,
    backgroundColor: theme.palette.grey["100"],
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Switch: React.FC = memo((): React.ReactElement => {
  const { t } = useTranslation();
  const { push, pathname } = useRouter();
  const value = useNextQueryParams();

  const label = {
    componentsProps: { input: { "aria-label": "Demo switch" } },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = {
      ...value,
      [event.target.name]: event.target.checked,
    };
    push(
      pathname,
      {
        query: removeUndefined(query),
      },
      { shallow: true }
    );
  };

  return (
    <FormControlLabel
      control={
        <StyledSwitch
          onChange={handleChange}
          checked={value.hasFaq as boolean}
          name="hasFaq"
          {...label}
        />
      }
      label={t("hasFaq")}
      sx={{
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        mx: 0,
        my: 2,
      }}
    />
  );
});

export default Switch;
