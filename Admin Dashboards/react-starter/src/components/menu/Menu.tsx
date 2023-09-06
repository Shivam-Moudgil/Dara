import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss";
export const Menu = () => {
  return (
    <div className="menu">
      <div className="lists">
        {menu?.map((el) => (
          <div key={el.id} className="list_items">
            <span className="listname">{el.title}</span>
            {el.listItems?.map((listname) => (
              <Link key={listname.id} to={listname?.url} className="list_link">
                <img src={listname?.icon} alt="icons" />
                <span className="list_head">{listname?.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
