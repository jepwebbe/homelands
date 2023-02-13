import React, { useEffect, useState } from "react";
import appService from "../../Components/App/Appservices/AppService";
import { RandomHousesStyled } from "./Styled.RandomHouses";

export const RandomHouses = () => {
  const [rans, setRans] = useState([]);
  console.log("dette er rans", rans);

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
  // Here I create a new array with the slice, then sorts it randomly and then slices it the first 3
  const randomHouses = rans
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <RandomHousesStyled>
      {randomHouses?.map((item, i) => (
        <article key={i}>
          <div className="imagewrap">
            <img
              src={item.images[0].filename.medium}
              alt={"et billede af" + item.address}
            />
          </div>
          <h2>{item.address}</h2>
          <p>
            {item.zipcode} {item.city}
          </p>
          <p>{item.type}</p>
          <div>
            <div>{item.energy_label_name}</div>
            <p>{item.num_rooms} værelser, {item.floor_space}m2</p>
            <p>{formatPrice.format(item.price)}</p>
          </div>
        </article>
      ))}
    </RandomHousesStyled>
  );
};
