import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { StyledEmployees } from "./Employees.Styled";

export const Employees = () => {
  const { state: employees } = useGetApiDataFromEndpoint("staff", "items");
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseOver = () => {
    setShowInfo(true);
  };
  const handleMouseLeave = () => {
    setShowInfo(false);
  };
  return (
    <StyledEmployees>
      <h2>Mød vores ansatte</h2>
      <div>
        {employees?.map((item, i) => (
          <article
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            key={i}
          >
            <img src={item?.image} alt={`Et billede af ${item.firstname}`} />
            <div>
              {showInfo && (
                <p>
                  Telefonnummer {item.phone} Email:{" "}
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </p>
              )}
              <h3>
                {item?.firstname} {item?.lastname}
              </h3>
              <p>{item.position}</p>
            </div>
          </article>
        ))}
      </div>
    </StyledEmployees>
  );
};
