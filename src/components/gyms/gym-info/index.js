import { Container } from "@mui/system";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import GymHeader from "./Gym-Header";
import GymTabs from "./Gym-Tabs";

const GymInfo = () => {
  const { id } = useParams();
  let SingleGymQuery = useQuery(
    ["Gyms", "list", id],
    async () => {
      const response = await fetch(
        `https://staging.algym.com/api/v1/gyms/${id}`,
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
  return (
    <>
      <GymHeader gymData={SingleGymQuery?.data} />
      <GymTabs gymData={SingleGymQuery?.data}/>
    </>
  );
};

export default GymInfo;
