import React from "react";
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
            <img src={item?.image} alt={`Et billede af ${item.firstname}`} />
            <h3>
              {item?.firstname} {item?.lastname}
            </h3>
            <p>{item.position}</p>
          </article>
        ))}
      </div>
    </StyledEmployees>
  );
};
