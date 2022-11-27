import {
  Button,
  Grid,
  InputAdornment,
  LinearProgress,
  Pagination,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useQuery } from "react-query";
import GymsCardsContainer from "./Gyms-Cards-Container";

const ListGyms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let GymsListQUery = useQuery(
    ["Gyms", "list", currentPage],
    async () => {
      const response = await fetch(
        `https://staging.algym.com/api/v1/gyms?lat=31.2443512&long=29.9715685&page_number=${currentPage}&page_size=10&search_diameter=1000`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "Accept-Language": currentLanguage,
          },
        }
      );

      const responseJson = await response.json();
      return responseJson.data;
    },
    {
      keepPreviousData: true,
      onError: () => console.log("Server Error"),
      retry: 3,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    }
  );
  if (GymsListQUery?.isFetching) {
    return <LinearProgress />;
  }
  return (
    <>
      <Grid container spacing={3} justifyContent="space-between" sx={{ py: 4 }}>
        <TextField
          sx={{ width: "25%" }}
          placeholder="Serach by gym name,facilities"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">filter</InputAdornment>
            ),
          }}
        />
        <Grid item sm={5} sx={{display:"flex", justifyContent:"end"}}>
          <Button size="large" variant="contained" color="primary">
            SWITCH TO MAP VIEW
          </Button>
        </Grid>
      </Grid>
      <GymsCardsContainer cardsArray={GymsListQUery?.data} />
      <Grid container justifyContent="center" sx={{ py: 2 }}>
        <Pagination
          onChange={(e, page) => {
            setCurrentPage(page);
          }}
          count={7}
        />
      </Grid>
    </>
  );
};

export default ListGyms;
