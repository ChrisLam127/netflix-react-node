import "./listItem.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDBkMDE2MWY5ODE0MzhlMDkxMWNhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODYwMjk1NiwiZXhwIjoxNjQ5MDM0OTU2fQ.SR8TxrgklwwFNv-6H037-kkopm9-mRcSH3jvCi3tZBY",
          },
        });
        setMovie(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
    return () => {
      setMovie({});
    };
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className='listItem'
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img src={movie.img} alt='' />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className='itemInfo'>
              <div className='icons'>
                <i className='fas fa-play icon'></i>
                <i className='fas fa-plus icon'></i>
                <i className='far fa-thumbs-up icon'></i>
                <i className='far fa-thumbs-down icon'></i>
              </div>
              <div className='itemInfoTop'>
                <span>{movie.duration}</span>
                <span className='limit'>+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className='desc'>{movie.desc}</div>
              <div className='genre'>{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
