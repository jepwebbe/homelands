import React, { useState } from "react";
import { useEffect } from "react";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { StyledEmployees } from "./Employees.Styled";

export const Employees = () => {
  const { state: employees } = useGetApiDataFromEndpoint("staff", "items");
  const [showInfo, setShowInfo] = useState(false);
  // useEffetct that renders on page load. Sets the otherwise mouseOver event to true
  // if the screen is small
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setShowInfo(true);
    }
  }, []);

  const handleMouseOver = () => {
    if (window.innerWidth > 800) {
      setShowInfo(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 800) {
      setShowInfo(false);
    }
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
              {(showInfo || window.innerWidth <= 800) && (
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
