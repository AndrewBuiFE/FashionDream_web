import { AppIcons } from "../../general/constants/AppResource";
import "./styles.scss";
const Header = () => {
  return (
    <div className="headerBackground">
      <div className="traditionalContact">
        <div className="phone">
          <img src={AppIcons.phone} alt="" />
          <span className="text">(225) 555-0118</span>
        </div>
        <div className="mail">
          <img src={AppIcons.mail} alt={AppIcons.facebook} />
          <span className="text">michelle.rivera@example.com</span>
        </div>
      </div>
      <div className="followUs">
        <p className="text">Follow Us and get a chance to win 80% off</p>
      </div>
      <div className="socialContact">
        <div>
          <p className="text">Follow Us:</p>
        </div>
        <div className="mediaContainer">
          <ul className="media">
            <li className="mediaBox">
              <a href="#">
                <img src={AppIcons.instagram} alt="" />
              </a>
            </li>
            <li className="mediaBox">
              <a href="#">
                <img src={AppIcons.youtube} alt="" />
              </a>
            </li>
            <li className="mediaBox">
              <a href="#">
                <img src={AppIcons.facebook} alt="" />
              </a>
            </li>
            <li className="mediaBox">
              <a href="#">
                <img src={AppIcons.twitter} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
