import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import { StyledHouseCard } from "../../Styles/HouseCard.Styled";
import { Page } from "../../Styles/PageTemplate/Page";
import { StyledHousesList } from "./HousesList.Styled";
import slugify from "slugify";

export const HousesList = () => {
  const [houseList, setHouseList] = useState([]);
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
  }, []);
  const formatPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "symbol",
  });

  return (
    <Page
      title={`Homelands - alle vores huse`}
      description={`En fuldstændig liste over alle de huse, vi har til salg`}
    >
      <StyledHousesList>
        <h2>Boliger til salg</h2>
        <StyledHouseCard columnWidth={300}>
          {houseList?.map((item, i) => (
            <Link key={i} to={item.id}>
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
