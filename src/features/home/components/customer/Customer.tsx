import type { JSX } from "react";
import React from "react";

export interface CustomerProps {
  customers: Array<{ imageUrl: string; name?: string }>;
}

const Customer = ({ customers }: CustomerProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className="flex justify-center gap-20">
        {customers.map((customer) => {
          return <img src={customer.imageUrl} alt={customer.name} width="150px" height="150px" />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Customer;
