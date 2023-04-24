import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setIsLoading(true);
      });
  }, []);

  if (!isLoading) return <p>Loading...</p>;

  console.log(data);
  return (
    <>
      <img src={data.message} alt="A Random Dog"/>
    </>
  );
}
export default App;
