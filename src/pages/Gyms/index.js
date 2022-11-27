import { Container } from "@mui/system";
import React from "react";
import ListGyms from "../../components/gyms/Gyms-List";

const GymsList = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <ListGyms />
    </Container>
  );
};

export default GymsList;
