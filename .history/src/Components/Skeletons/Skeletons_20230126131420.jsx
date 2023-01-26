import { Box, Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import Loanding from '../Images/Carregamentochar.gif';
import React from "react";

export const Skeletons = () => {
  return (
    <Container maxWidth={false}>
      <Box component="img" src={Loanding} height="3em"/>
    </Container>
  );
};