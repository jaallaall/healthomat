import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";

const SocialNetwork: React.FC = (): React.ReactElement => {
  return (
    <>
      <IconButton aria-label="facebook" color="primary">
        <FacebookIcon />
      </IconButton>
      <IconButton aria-label="twiter" color="primary">
        <TwitterIcon />
      </IconButton>
      <IconButton aria-label="LinkedIn" color="primary">
        <LinkedInIcon />
      </IconButton>
    </>
  );
};

export default SocialNetwork;
