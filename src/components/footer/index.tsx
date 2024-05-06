import { Box, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Behance from "../../assets/png/behance.png";
import { useMemo } from "react";
import { FOOTER_LINKS } from "../../constants";

const SocialIconButton = ({ icon }: { icon: JSX.Element }) => (
  <IconButton>{icon}</IconButton>
);

const Footer = () => {
  const socialIcons = useMemo(
    () => [
      <FacebookIcon />,
      <InstagramIcon />,
      <TwitterIcon />,
      <img src={Behance} />,
    ],
    []
  );

  return (
    <Box sx={classes.root}>
      <Stack direction={"row"} justifyContent={"flex-end"} gap={6}>
        {FOOTER_LINKS.map((item, index) => (
          <Typography key={index} sx={{ cursor: "pointer" }}>
            {item}
          </Typography>
        ))}
      </Stack>
      <Stack
        marginTop={10}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>&#169; 2023 Fixaroo</Typography>
        <Stack direction="row" gap={2}>
          {socialIcons.map((icon, index) => (
            <SocialIconButton key={index} icon={icon} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

const classes = {
  root: {
    borderTop: "1px solid rgba(0,0,0,0.15)",
    margin: "10 30px 0 30px",
    padding: 8,
    marginTop: 5,
  },
};
