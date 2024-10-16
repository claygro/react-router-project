import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/claygro")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
    {/* this all name image and followers are all come from api of github */}
      <div className=" m-4 bg-gray-600 text-white p-4 text-3xl ">
        <h1 className="text-white text-center text-4xl">Name:{data.login}</h1>
        <main className="flex justify-around place-items-center">
          <img src={data.avatar_url} alt="github picture" width={300} />
          <h1>Github followers:{data.followers}</h1>
        </main>
      </div>
    </>
  );
};

export default Github;
