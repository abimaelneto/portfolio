import { Card as MuiCard, Stack, styled } from "@mui/material";

export const Card = styled(MuiCard)(({ theme, startPosition, duration }) => ({
  background: theme.palette.primary.light,
  marginTop: 2,
  paddingBlock: theme.spacing(2),
  height: theme.spacing(15),
  marginLeft: startPosition,
  width: duration,
}));

export const Content = styled(Stack)(({ theme }) => ({
  paddingInline: theme.spacing(1),
}));
