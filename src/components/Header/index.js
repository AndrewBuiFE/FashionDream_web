import { AppIcons } from "../../general/constants/AppResource";
import "./styles.scss";
const Header = () => {
  return (
    <div class="d-flex flex-row justify-content-between align-items-start headerBackground ">
      <div className="d-flex flex-row align-items-center col-md-4 col">
        <div className="d-flex flex-row align-items-center">
          <img src={AppIcons.phone} alt="" />
          <p className="text font-weight-bolder">(225) 555-0118</p>
        </div>
        <div className="d-flex flex-row align-items-center">
          <img scr={AppIcons.mail} alt="" />
          <p className="text font-weight-bolder">michelle.rivera@example.com</p>
        </div>
      </div>
      <div className="text-center col-md-4">
        <p className="text font-weight-bolder">
          Follow Us and get a chance to win 80% off
        </p>
      </div>
      <div className="d-flex flex-row align-items-center col-md-4">
        <p className="text font-weight-bolder">Follow Us:</p>
        <ul className="d-flex flex-row align-items-center list-unstyled">
          <li>
            <a href="">
              <img src={AppIcons.instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={AppIcons.youtube} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={AppIcons.facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={AppIcons.twitter} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
