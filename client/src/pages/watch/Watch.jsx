import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

const Watch = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className='watch'>
      <div className='back'>
        <Link to='/' className='link'>
          <ArrowBackOutlined />
          Home
        </Link>
      </div>
      <video
        className='video'
        autoPlay
        progress
        controls
        src='https://youtu.be/_p-FyoxPmxI'
      />
    </div>
  );
};

export default Watch;
