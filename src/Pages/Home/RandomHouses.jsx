import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import { StyledHouseCard } from "../../Styles/HouseCard.Styled";

export const RandomHouses = () => {
  const [rans, setRans] = useState([]);

  const formatPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "symbol",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.Get("homes");
        setRans(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [setRans]);
  // Here I create a new array with the slice, then sort it randomly and then slices it the first 3
  const randomHouses = rans
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <StyledHouseCard columnWidth={200}>
      {randomHouses?.map((item, i) => (
        <Link key={i} to={`/boliger/${item.id}`}>
          <article>
            <div className="imagewrap">
              <img
                src={item.images[0].filename.medium}
                alt={"et billede af" + item.address}
              />
            </div>
            <h2>{item.address}</h2>
            <p className="marginBottom font">
              {item.zipcode} {item.city}
            </p>
            <p className="marginTop font">{item.type}</p>
            <div>
              <div><p>{item.energy_label_name}</p></div>
              <p>{item.num_rooms} værelser, {item.floor_space}m2</p>
              <p className="price">{formatPrice.format(item.price)}</p>
            </div>
          </article>
        </Link>
      ))}
    </StyledHouseCard>
  );
};
