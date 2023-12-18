import { NavLink } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Home",
  },
  {
    path: "/home",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/login",
    display: "Login",
  },
];

const Header = () => {
  return (
    <>
      <nav className=" pt-3">
        <ul className=" flex gap-10 justify-center">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <NavLink to={link.path}>
                  {link.display == "Login" ? (
                    <button className=" bg-slate-500">{link.display}</button>
                  ) : (
                    link.display
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
