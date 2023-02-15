import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import { PageThree } from "../../Styles/PageTemplate/PageThree";
import { StyledHouseDetails } from "./HouseDetails.Styled";

const HousesDetails = () => {
  const [houseDetails, setHouseDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("homes", id);
        setHouseDetails(result.data.item);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  console.log("housedetails", houseDetails);
  return (
    <PageThree title={`Homelands: ${houseDetails?.address}`}>
      <StyledHouseDetails>
        <div>
          <img
            src={houseDetails.images && houseDetails.images[1].filename.large}
            alt="Et billede"
          />
        </div>
        <div className="detailsgrid">
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>h</div>
        </div>
      </StyledHouseDetails>
    </PageThree>
  );
};

export default HousesDetails;
