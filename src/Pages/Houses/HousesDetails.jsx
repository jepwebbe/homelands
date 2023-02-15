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
          <div>
            <h2>{houseDetails?.address}</h2>
            <p>
              {houseDetails?.zipcode} {houseDetails?.city}
            </p>
            <p>
              {houseDetails?.type} | {houseDetails.floo_space} |{" "}
              {houseDetails?.num_rooms}
            </p>
          </div>
          <div>b</div>
          <div>
            <p className="price">
              Kontantpris <span>{houseDetails?.price}</span>
            </p>
            <p>Udbetaling {houseDetails?.payout}</p>
            <p>Ejerudgift pr måned {houseDetails?.cost}</p>
          </div>
          <div>
            <p>Sagsnr.</p>
            <span>{houseDetails?.id}</span>
            <p>Boligareal</p>
            <span>{houseDetails?.floor_space}</span>
            <p>Grundareal</p>
            <span>{houseDetails?.ground_space}</span>
            <p>Antal rum</p>
            <span>{houseDetails?.num_rooms}</span>
            <p>Antal plan</p>
            <span>{houseDetails?.num_floors}</span>
          </div>
          <div>
            <p>Kælder</p>
            <span>{houseDetails?.floor_space}</span>
            <p>Byggeår</p>
            <span>{houseDetails?.ground_space}</span>
            <p>Ombygget</p>
            <span>{houseDetails?.num_rooms}</span>
            <p>Energimærke</p>
            <span>{houseDetails?.num_floors}</span>
            <p>Liggetid</p>
            <span>{houseDetails?.id}</span>
          </div>
          <div>
            <p>Kontantpris</p>
            <span>{houseDetails?.price}</span>
            <p>Udbetaling</p>
            <span>{houseDetails?.ground_space}</span>
            <p>Brutto ex. ejerudgift</p>
            <span>{houseDetails?.num_rooms}</span>
            <p>Netto ex. ejerudgift</p>
            <span>{houseDetails?.num_floors}</span>
            <p>Ejerudgift</p>
            <span>{houseDetails?.id}</span>
          </div>
          <div>{houseDetails?.description}</div>
          <div>
            <article>
                <h3>Kontakt</h3>
              <img
                src={houseDetails?.staff?.image}
                alt={`Et billede af ${houseDetails?.staff?.firstname}`}
              />
              <div>
                <h3>
                  {houseDetails?.staff?.firstname}{" "}
                  {houseDetails?.staff?.lastname}
                </h3>
                <p>{houseDetails?.staff?.position}</p>
                <p>
                  Telefonnummer {houseDetails?.staff?.phone} Email:
                  <a href={`mailto:${houseDetails?.staff?.email}`}>
                    {houseDetails?.staff?.email}
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </StyledHouseDetails>
    </PageThree>
  );
};

export default HousesDetails;
