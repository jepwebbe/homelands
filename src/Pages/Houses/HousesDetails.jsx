import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import { PageThree } from "../../Styles/PageTemplate/PageThree";
import { StyledHouseDetails } from "./HouseDetails.Styled";
import { AiFillCamera, AiOutlineHeart } from "react-icons/ai";
import { IoMdPin } from "react-icons/io";
import floorplan from "../../assets/FloorplanIcon.png";
import { useModalStore } from "./Modal/useModalStore";
import Hero from "../Home/Hero/Hero";

const HousesDetails = () => {
  const { setModalPayload, modalPayload } = useModalStore();
  console.log("modalpayload", modalPayload);
  const [houseDetails, setHouseDetails] = useState({});

  const { id } = useParams();
  // fetch the home from the id in the url
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
  // posts a favorite onClick (not working)
  const postFavorite = (id) => {
    const add = async () => {
      try {
        console.log("id er ", id);

        const result = await appService.Create("favorites", { home_id: id });
        console.log("postFav", result.data);
      } catch (error) {
        console.error(error);
      }
    };
    add();
  };
  // const { state: favorites } = useGetApiDataFromEndpoint("favorites");
  // console.log("favoritter", favorites);

  // Images for the modal gallery
  const imageData = houseDetails?.images?.map((item) => {
    return item.filename.medium;
  });
  // onClick function for the map to the modal
  const getMap = (address, city) => {
    return
  };
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
              {houseDetails?.type} | {houseDetails.floor_space}m2 |{" "}
              {houseDetails?.num_rooms} værelser
            </p>
          </div>
          <div>
            <div>
              <AiFillCamera
                onClick={() =>
                  setModalPayload(<Hero btnColor="white" slides={imageData} />)
                }
              />
            </div>
            <div>
              <button
                onClick={() =>
                  setModalPayload(
                    <img
                      src={houseDetails?.floorplan}
                      alt="Grundplan for huset"
                    />
                  )
                }
              >
                <img src={floorplan} alt="Billede af grundplan" />
              </button>
            </div>
            <div>
              <IoMdPin
                onClick={() =>
                  setModalPayload(() =>
                    getMap(houseDetails?.address, houseDetails?.city)
                  )
                }
              />
            </div>
            <div>
              <AiOutlineHeart onClick={() => postFavorite(houseDetails.id)} />
            </div>
          </div>
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
