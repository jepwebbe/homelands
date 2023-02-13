import React from "react";
import { useSearchResultsStore } from "../Components/Partials/Header/Search/useSearchResultStore";
import { HouseCardStyled } from "../Styles/HouseCard";
import { Page } from "../Styles/PageTemplate/Page";
import { SearchResultStyled } from "./Styled.SearchResult";

const SearchResult = () => {
  const { searchResults } = useSearchResultsStore();
  console.log("søgeresult", searchResults)

  const formatPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "symbol",
  });
  return (
    <Page title="Søgeresultat">
      <SearchResultStyled>
        <h2>Din søgning</h2>
        <HouseCardStyled columnWidth={500}>
          {searchResults?.length > 0 ? (
            searchResults.map((item, i) => (
              <article key={i}>
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
            ))
          ) : (
            <p>Din søgning gav ingen resultater</p>
          )}
        </HouseCardStyled>
      </SearchResultStyled>
    </Page>
  );
};

export default SearchResult;
