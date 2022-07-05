import { Accordion, Switch } from "@mui";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useNextQueryParams } from "hooks";
import { Options } from "interfaces";
import { useRouter } from "next/router";
import { removeUndefined, list } from "utils";

const ListCheckbox: React.FC = (): React.ReactElement => {
  const { push, pathname } = useRouter();
  const value = useNextQueryParams();

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    push(
      pathname,
      {
        query: removeUndefined({
          ...value,
          [event.target.name]: event.target.checked,
        }),
      },
      { shallow: true }
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {list.map((item, i) => {
        const expanded = item?.sub?.some((element) =>
          Object.keys(value).includes(element.value)
        );
        return item.sub ? (
          <Accordion
            key={item.id}
            title={item.title}
            expanded={expanded as boolean}
          >
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              {item.sub?.map((sub: Options) => {
                const labelId = `checkbox-list-label-${sub.value}`;

                return (
                  <ListItem key={sub.id} disablePadding>
                    <ListItemButton role={undefined} dense>
                      <FormControlLabel
                        control={
                          <Checkbox
                            edge="start"
                            onChange={handleChangeCheck}
                            name={sub.value}
                            checked={value[sub?.value] as boolean}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        }
                        label={sub.title}
                        sx={{ width: "100%" }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Accordion>
        ) : (
          <>
            <Divider />
            <Switch />
          </>
        );
      })}
    </>
  );
};

export default ListCheckbox;
