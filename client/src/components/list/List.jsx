import ListItem from "../listItem/ListItem";
import "./list.scss";
import { useRef, useState } from "react";

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className='list'>
      <span className='listTitle'>{list.title}</span>
      <div className='wrapper'>
        <i
          className='fas fa-angle-left slider left'
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}></i>
        <div className='container' ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
        </div>
        <i
          class='fas fa-chevron-right slider right'
          onClick={() => handleClick("right")}></i>
      </div>
    </div>
  );
};

export default List;
