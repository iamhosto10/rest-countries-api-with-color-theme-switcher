import React, { useEffect, useState } from "react";
import { Detail } from "../Cover/Cover.elements";
import { searchCountry, codetoname } from "../Functions/APIRestSearch";

function DetailCard({ details, setDetails, country, setCountry }) {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    async function API3() {
      try {
        setSelected(await searchCountry(country));
      } catch (error) {}
    }
    API3();
  }, [country]);
  return (
    <>
      <Detail>
        <button onClick={() => setDetails(!details)}> &lt;- Back Home</button>
        <article>
          <img
            src={selected ? selected[0]["flags"]["png"] : ""}
            alt={selected ? selected[0]["name"]["common"] : " "}
          />
          <h2>{selected ? selected[0]["name"]["common"] : " "}</h2>
          <div className="detail-container">
            <div className="flex">
              <h3>Native-name:</h3>
              <h4>
                {selected
                  ? Object.values(selected[0].name.nativeName)[0]?.common
                  : " "}
              </h4>
            </div>
            <div className="flex">
              <h3>Population:</h3>
              <h4>{selected ? selected[0].population : " "}</h4>
            </div>
            <div className="flex">
              <h3>Region:</h3>
              <h4>{selected ? selected[0].region : " "}</h4>
            </div>
            <div className="flex">
              <h3>Sub Region:</h3>
              <h4>{selected ? selected[0].subregion : " "}</h4>
            </div>
            <div className="flex">
              <h3>Capital:</h3>
              <h4>{selected ? selected[0].capital : " "}</h4>
            </div>
          </div>
          <div className="more-detail">
            <div className="flex">
              <h3>Top level domain:</h3>
              <h4>{selected ? selected[0].tld[0] : " "}</h4>
            </div>
            <div className="flex">
              <h3>Currencies:</h3>
              <h4>
                {selected
                  ? Object.values(selected[0].currencies).map((l, index) =>
                      index + 1 === Object.values(selected[0].currencies).length
                        ? l.name + "."
                        : l.name + ","
                    )
                  : " "}
              </h4>
            </div>
            <div className="flex">
              <h3>Languages:</h3>
              <h4>
                {selected
                  ? Object.values(selected[0].languages).map((l, index) =>
                      index + 1 === Object.values(selected[0].languages).length
                        ? l + "."
                        : l + ","
                    )
                  : " "}
              </h4>
            </div>
          </div>
          <section className="border-countries">
            <h3> Border Countries: </h3>
            <div className="border-countries-button">
              {selected
                ? selected[0].borders
                  ? selected[0].borders.map((e, index) => (
                      <button
                        key={index}
                        onClick={async () => setCountry(await codetoname(e))}
                      >
                        {" "}
                        {e}{" "}
                      </button>
                    ))
                  : "No border countries"
                : "No border countries"}
            </div>
            {/* <button onClick={() => setCountry("Colombia")}>Hola</button> */}
          </section>
        </article>
      </Detail>
    </>
  );
}

export default DetailCard;
