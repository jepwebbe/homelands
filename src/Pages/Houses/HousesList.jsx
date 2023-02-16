import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import { StyledHouseCard } from "../../Styles/HouseCard.Styled";
import { Page } from "../../Styles/PageTemplate/Page";
import { StyledHousesList } from "./HousesList.Styled";
import slugify from "slugify";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useLoginStore } from "../Login/Login/useLoginStore";

export const HousesList = () => {
  // Setting up state variables and setter functions
  const [houseList, setHouseList] = useState([]);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  //Destructuring custom hook
  const { loggedIn } = useLoginStore();

  // If user is logged in, it fetches favorites. Rerenders when loggedIn or favoritesCount changes
  // to change appearance of favorite-icon
  useEffect(() => {
    if (loggedIn) {
      const getData = async () => {
        try {
          const result = await appService.Get("favorites");
          setFavorites(result.data.items);
        } catch (error) {
          console.error(error);
        }
      };
      getData();
    }
  }, [loggedIn, favoritesCount]);

  // fetches all the homes and sets to state
  // rerenders when a favorite has been toggled cf. dep. array
  // also adds a slug property
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.Get("homes");
        for (const parent of result.data.items) {
          parent.slug = slugify(parent.address, {
            strict: true,
            lower: true,
            locale: "da",
          });
        }
        setHouseList(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [favoritesCount]);

  // Function to format the price to Danish
  const formatPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "symbol",
  });

  // posts a favorite onClick, takes the id as a parameter
  // adds to faveoritesCount to ensure a rerender of the favorite fetch
  const postFavorite = (home_id, event) => {
    event.preventDefault();
    const add = async () => {
      try {
        await appService.Create("favorites", { home_id });
        setFavoritesCount(+1);
      } catch (error) {
        console.error(error);
      }
    };
    add();
  };
  // removes favorite onClick, takes the id as a parameter
  // subtracts from faveoritesCount to ensure a rerender of the favorite fetch
  const deleteFavorite = (home_id, event) => {
    event.preventDefault();
    const remove = async () => {
      try {
        await appService.Remove("favorites", home_id);
        setFavoritesCount(-1);
      } catch (error) {
        console.error(error);
      }
    };
    remove();
  };

  // First variable sorts the houseList array after the type selected in the dropdown
  // second variable is a simple ternary that sets to the filtered, if it is longer than 0
  const filteredHouseList = selectedType
    ? houseList.filter((house) => house.type === selectedType)
    : houseList;
  const shownList =
    filteredHouseList.length > 0 ? filteredHouseList : houseList;
  return (
    <Page
      title={`Homelands - alle vores huse`}
      description={`En fuldstændig liste over alle de huse, vi har til salg`}
    >
      <StyledHousesList>
        <div>
          <h2>Boliger til salg</h2>
          <div>
            {/* The code below is snatched from the internet. 
            "It creates an array of unique types from the houseList and map over them to create options" */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Sorter efter type</option>
              {[...new Set(houseList.map((house) => house.type))].map(
                (type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <StyledHouseCard columnWidth={300}>
          {shownList?.map((item, i) => (
            <Link key={i} to={item.id}>
              <article>
                <div className="imagewrap">
                  <img
                    src={item.images[0].filename.medium}
                    alt={"et billede af" + item.address}
                  />
                </div>
                <div className="head">
                  <h2>{item.address}</h2>
                  {loggedIn ? (
                    favorites?.find(
                      (favorite) => favorite.home_id === item.id
                    ) ? (
                      <AiFillHeart
                        onClick={(event) => deleteFavorite(item.id, event)}
                      />
                    ) : (
                      <AiOutlineHeart
                        onClick={(event) => postFavorite(item.id, event)}
                      />
                    )
                  ) : (
                    <Link to="/login">
                      <AiOutlineHeart />
                    </Link>
                  )}
                </div>
                <p className="marginBottom font">
                  {item.zipcode} {item.city}
                </p>
                <p className="marginTop font">{item.type}</p>
                <div>
                  <div>
                    <p>{item.energy_label_name}</p>
                  </div>
                  <p>
                    {item.num_rooms} værelser, {item.floor_space}m2
                  </p>
                  <p className="price">{formatPrice.format(item.price)}</p>
                </div>
              </article>
            </Link>
          ))}
        </StyledHouseCard>
      </StyledHousesList>
    </Page>
  );
};
