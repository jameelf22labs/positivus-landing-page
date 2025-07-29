import type { JSX } from "react";
import React from "react";

import amazon from "../,,/../../assets/images/amazon.svg";
import dribble from "../,,/../../assets/images/dribble.svg";
import hubspot from "../,,/../../assets/images/hubspot.svg";
import notion from "../,,/../../assets/images/notion.svg";
import netflix from "../,,/../../assets/images/netflix.svg";
import zoom from "../,,/../../assets/images/zoom.svg";

const Customer = (): JSX.Element => {
  const customers = React.useMemo(() => {
    return [
      { imageUrl: amazon, name: "amazon" },
      { imageUrl: dribble, name: "dribble" },
      { imageUrl: hubspot, name: "hubspot" },
      { imageUrl: notion, name: "notion" },
      { imageUrl: netflix, name: "netflix" },
      { imageUrl: zoom, name: "zoom" },
    ];
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 py-6">
      {customers.map((customer, index) => (
        <img
          key={index}
          src={customer.imageUrl}
          alt={customer?.name ?? `customer-${index}`}
          className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
        />
      ))}
    </div>
  );
};

export default Customer;
