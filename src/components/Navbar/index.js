import { AppIcons } from "../../general/constants/AppResource";
import "./styles.scss";
const NavBar = () => {
  return (
    <nav class="">
      <div className="navContainer">
        <div className="navLinkSection">
          <a className="navText" href="#">
            Bandage
          </a>
          <ul className="navLink">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="Shop">Shop</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Blog">Blog</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
            <li>
              <a href="Page">Page</a>
            </li>
          </ul>
        </div>
        <div className="navActionSection">
          <a>
            <img src={AppIcons.user} />
            <span>Login / Register</span>
          </a>
          <a href="">
            <img src={AppIcons.search} />
          </a>
          <a href="">
            <img src={AppIcons.cart} />
            <span>1</span>
          </a>
          <a href="">
            <img src={AppIcons.heart} />
            <span>1</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
