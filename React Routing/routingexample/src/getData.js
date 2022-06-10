import { useEffect } from "react";

useEffect(() => {
  async function getData() {
    const actualData = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    ).then(response=> response.json());
    console.log(actualData);
  }
  getData();
}, []);
