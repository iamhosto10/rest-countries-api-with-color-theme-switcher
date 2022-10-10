export default async function (search, region) {
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
