import React from "react";
import { Link } from "react-router-dom";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { StyledEmployees } from "./Employees.Styled";

export const Employees = () => {
  const { state: employees } = useGetApiDataFromEndpoint("staff", "items");
  return (
    <StyledEmployees>
      <h2>Mød vores ansatte</h2>
      <div>
        {employees?.map((item, i) => (
          <article key={i}>
            <Link to="/"><img src={item?.image} alt={`Et billede af ${item.firstname}`} /></Link>
            <div>
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
