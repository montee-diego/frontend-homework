import React, { useCallback, useEffect, useState } from "react";

import { SauceClient } from "@api/client";
import { useCalcContext } from "@contexts/CalcContext";
import { Dropdown, Input, Overlay } from "@components";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const { brand, category, setCategory } = useCalcContext();

  const filter = input => {
    setCategory(null);
    setQuery(input);

    const filterResults = categories.filter(category =>
      category.name.toLowerCase().includes(input.toLowerCase())
    );

    setFilterData(filterResults);
  };

  const select = option => {
    setCategory(option);
    setQuery(option.name);
    setOpen(false);
  };

  const fetchCategories = useCallback(async brandId => {
    setLoading(true);

    SauceClient.get("categories", {
      params: {
        brand_id: brandId,
      },
    })
      .then(response => {
        setCategories(response.data.categories);
        setFilterData(response.data.categories);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Reset categories on brand change
    setCategory(null);
    setQuery("");
    setCategories([]);
    setFilterData([]);

    // Fetch new categories if another brand is selected
    if (brand) {
      fetchCategories(brand.id);
    }
  }, [brand]);

  return (
    <div className={!brand ? "disabled" : ""}>
      <Overlay open={open} setOpen={setOpen} />
      <Input
        value={category}
        filter={filter}
        open={open}
        setOpen={setOpen}
        prompt='category'
        query={query}>
        <Dropdown options={filterData} select={select} loading={loading} />
      </Input>
    </div>
  );
};

export default Category;
