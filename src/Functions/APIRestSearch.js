export default async function APIRestSearch(search, region) {
  const URL =
    region === ""
      ? search === ""
        ? "https://restcountries.com/v3.1/all"
        : `https://restcountries.com/v3.1/name/${search}`
      : `https://restcountries.com/v3.1/region/${region}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return response.ok ? data : null;
  } catch (error) {
    throw new Error("Invalid url adress");
  }
}

export async function searchCountry(country) {
  console.log(country);
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    const data = await response.json();
    console.log(data);
    return response.ok ? data : null;
  } catch (error) {
    throw new Error("Invalid url adress");
  }
}

export async function codetoname(code) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    const data = await response.json();
    console.log(data[0].name.common, "code");
    return response.ok ? data[0].name.common : null;
    // return "colombia";
  } catch (error) {
    throw new Error("Invalid url adress");
  }
}
