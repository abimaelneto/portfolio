import { Popover as MuiPopover, Stack } from "@mui/material";
import { Container, Description, SkillTag, Title } from "./styles";

export const Popover = ({
  open,
  anchorEl,
  handleClose,
  title,
  description,
  skills,
}) => {
  return (
    <MuiPopover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={handleClose}
      disableRestoreFocus
    >
      <Container>
        <Title variant="subtitle1">{title}</Title>
        <Description variant="subtitle2">{description}</Description>
        <Stack direction="row" spacing={2}>
          {skills.map((s) => (
            <SkillTag variant="button">{s}</SkillTag>
          ))}
        </Stack>
      </Container>
    </MuiPopover>
  );
};
