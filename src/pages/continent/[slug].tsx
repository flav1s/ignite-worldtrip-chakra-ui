import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentInfo from "../../components/ContinentInfo";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";

import db from "../../../db.json";

interface CountryProps {
  image: string;
  name: string;
  capital: string;
  flag: string;
}

interface ContinentProps {
  slug: string;
  name: string;
  url: string;
  description: string;
  full_description: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  countries: CountryProps[];
}

const Continent = () => {
  const [continent, setContinent] = useState<ContinentProps | null>(null);
  const router = useRouter();
  const { slug } = router.query;
  const { continents } = db;

  useEffect(() => {
    const selectedContinent = continents.find(
      (continent) => continent.slug === slug
    );
    setContinent(selectedContinent);
  }, [slug]);

  return (
    <>
      <Header />
      {continent && (
        <ContinentBanner name={continent.name} url={`${continent.url}`} />
      )}
      {continent && (
        <ContinentInfo
          full_description={continent.full_description}
          numberOfCountries={continent.numberOfCountries}
          numberOfLanguages={continent.numberOfLanguages}
        />
      )}
      {continent && <Gallery countries={continent.countries} />}
    </>
  );
};

export default Continent;
