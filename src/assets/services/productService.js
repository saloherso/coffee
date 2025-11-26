
const API_URL =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";

export async function getProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Error fetching products: " + res.status);
  }
  return res.json();
}
