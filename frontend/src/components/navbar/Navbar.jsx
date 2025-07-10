import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "ABOUT",
      path: "/about",
    },
    {
      id: 2,
      name: "HELP",
      path: "/help",
    },
    {
      id: 3,
      name: "EDIT PROFILE",
      path: "/edit-profile",
    },
    {
      id: 4,
      name: "LOGOUT",
      path: "/logout",
    },
  ];

  return (
    <>
      <div className="black_cover"></div>
      <div className="navbar">
        <div
          style={{
            margin: "1rem",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "#00ccff",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
            className="bruno-ace-regular"
          >
            Skill Sync
          </div>
          <div className="subnav poppins-regular">
            {links.map((link) => {
              return (
                <Link key={link.id} to={link.path}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
