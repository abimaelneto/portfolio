import { Stack, Typography } from "@mui/material";
import { Card, Content } from "./styles";
import { useState } from "react";
import { Popover } from "../Popover";
export const ExperienceCard = ({
  title,
  description,
  duration,
  baseSize,
  startPosition,
  skills,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const dur = `${baseSize * duration}rem`;
  const mon = `${baseSize * startPosition}rem`;

  return (
    <Card duration={dur} startPosition={mon}>
      <Content
        direction="column"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Typography variant="h6"> {title}</Typography>
        <Typography
          nowrap
          variant="subtitle1"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordWrap: " break-word",
            whiteSpace: "nowrap",
          }}
        >
          {description}
        </Typography>
      </Content>

      <Popover
        open={open}
        anchorEl={anchorEl}
        handleClose={handlePopoverClose}
        title={title}
        description={description}
        skills={skills}
      />
    </Card>
  );
};
