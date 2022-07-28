import React, { useState } from "react";
import "@styles/App.css";

import { SauceClient } from "@api/client";
import { useCalcContext } from "@contexts/CalcContext";
import { Calculator } from "@containers";
import { Brand, Category, Measure, Button, Results, Loading, Error } from "@components";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isViewResult, setIsViewResult] = useState(false);

  const { brand, category, size, setResult, resetApp } = useCalcContext();

  const fetchResults = async () => {
    if (brand && category && size != "") {
      setIsLoading(true);

      SauceClient.get("sizes", {
        params: {
          brand_id: brand.id,
          category_id: category.id,
          measurement: size,
        },
      })
        .then(response => {
          setResult(response.data.sizes);
          setIsViewResult(true);
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
          setIsError(true);
        });

      resetApp();
    }
  };

  return (
    <div className='App'>
      <Calculator>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error setIsError={setIsError} />
        ) : isViewResult ? (
          <Results setIsViewResult={setIsViewResult} />
        ) : (
          <>
            <Brand />
            <Category />
            <Measure />
            <Button label='CALCULATE' onClick={fetchResults} />
          </>
        )}
      </Calculator>
    </div>
  );
}

export default App;
