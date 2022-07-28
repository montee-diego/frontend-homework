import React, { useState } from "react";

import { SauceClient } from "@api/client";
import { useCalcContext } from "@contexts/CalcContext";
import { Dropdown, Input, Overlay } from "@components";

const Brand = () => {
  const [brands, setBrands] = useState([]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const { brand, setBrand } = useCalcContext();

  const filter = async input => {
    setLoading(true);
    setBrand(null);
    setBrands([]);
    setQuery(input);

    SauceClient.get("brands", {
      params: {
        limit: 20,
        name_prefix: input,
      },
    })
      .then(response => {
        setBrands(response.data.brands);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  };

  const select = option => {
    setBrand(option);
    setQuery(option.name);
    setOpen(false);
  };

  return (
    <div>
      <Overlay open={open} setOpen={setOpen} />
      <Input
        value={brand}
        filter={filter}
        open={open}
        setOpen={setOpen}
        prompt='brand'
        query={query}>
        <Dropdown options={brands} select={select} query={query} loading={loading} />
      </Input>
    </div>
  );
};

export default Brand;
