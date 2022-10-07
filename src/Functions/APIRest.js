export default async function () {
  const URL = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Invalid url adress");
  }
}
