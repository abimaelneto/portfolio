import { Box, Stack, Typography, styled } from "@mui/material";

export const ChartHeader = styled(Stack)(({ theme }) => ({
  width: "100%",
}));

export const Year = styled(Typography)(({ theme }) => ({
  background: theme.palette.secondary.light,
  paddingBlock: theme.spacing(2),
}));
export const Month = styled(Box)(({ theme, baseSize }) => ({
  minWidth: `${baseSize}rem`,
  background: theme.palette.grey[200],
  border: "1px solid black",
}));
