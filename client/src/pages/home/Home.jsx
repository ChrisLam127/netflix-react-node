import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./home.scss";

const Home = ({ type }) => {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDBkMDE2MWY5ODE0MzhlMDkxMWNhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODYwMjk1NiwiZXhwIjoxNjQ5MDM0OTU2fQ.SR8TxrgklwwFNv-6H037-kkopm9-mRcSH3jvCi3tZBY",
            },
          }
        );
        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
    return () => {
      setList([]);
    };
  }, [type, genre]);
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {list.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
};

export default Home;
