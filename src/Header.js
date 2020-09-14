import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="main">
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            alt="amazon-logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="header__search">
          <select type="button" className="header__searchSelect">
            <option selected="selected" value="search-alias=aps">
              All Categories
            </option>
            <option value="search-alias=todays-deals">Deals</option>
            <option value="search-alias=alexa-skills">Alexa Skills</option>
            <option value="search-alias=amazon-devices">Amazon Devices</option>
            <option value="search-alias=fashion">Amazon Fashion</option>
            <option value="search-alias=pantry">Amazon Pantry</option>
            <option value="search-alias=appliances">Appliances</option>
            <option value="search-alias=mobile-apps">Apps &amp; Games</option>
            <option value="search-alias=baby">Baby</option>
            <option value="search-alias=beauty">Beauty</option>
            <option value="search-alias=stripbooks">Books</option>
            <option value="search-alias=automotive">Car &amp; Motorbike</option>
            <option value="search-alias=apparel">
              Clothing &amp; Accessories
            </option>
            <option value="search-alias=collectibles">Collectibles</option>
            <option value="search-alias=computers">
              Computers &amp; Accessories
            </option>
            <option value="search-alias=electronics">Electronics</option>
            <option value="search-alias=furniture">Furniture</option>
            <option value="search-alias=lawngarden">
              Garden &amp; Outdoors
            </option>
            <option value="search-alias=gift-cards">Gift Cards</option>
            <option value="search-alias=grocery">
              Grocery &amp; Gourmet Foods
            </option>
            <option value="search-alias=hpc">Health &amp; Personal Care</option>
            <option value="search-alias=kitchen">Home &amp; Kitchen</option>
            <option value="search-alias=industrial">
              Industrial &amp; Scientific
            </option>
            <option value="search-alias=jewelry">Jewellery</option>
            <option value="search-alias=digital-text">Kindle Store</option>
            <option value="search-alias=luggage">Luggage &amp; Bags</option>
            <option value="search-alias=luxury-beauty">Luxury Beauty</option>
            <option value="search-alias=dvd">Movies &amp; TV Shows</option>
            <option value="search-alias=popular">Music</option>
            <option value="search-alias=mi">Musical Instruments</option>
            <option value="search-alias=office-products">
              Office Products
            </option>
            <option value="search-alias=pets">Pet Supplies</option>
            <option value="search-alias=instant-video">Prime Video</option>
            <option value="search-alias=shoes">Shoes &amp; Handbags</option>
            <option value="search-alias=software">Software</option>
            <option value="search-alias=sporting">
              Sports, Fitness &amp; Outdoors
            </option>
            <option value="search-alias=home-improvement">
              Tools &amp; Home Improvement
            </option>
            <option value="search-alias=toys">Toys &amp; Games</option>
            <option value="search-alias=under-ten-dollars">Under ₹500</option>
            <option value="search-alias=videogames">Video Games</option>
            <option value="search-alias=watches">Watches</option>
          </select>
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div
              onClick={handleAuthentication}
              className="header__option header__option1"
            >
              <span className="header__optionLineOne">
                Hello, {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
              {/*<select type="button">
                        <option value="account-options=your_account">Your Account</option>
                    </select>*/}
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option header__option2">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option header__option3">
            <span className="header__optionLineOne">Try</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__basketCount">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="secondHeader">
        <div className="secondHeader__left">
          <div className="secondHeader__addressContainer">
            <div className="location__Container">
              <LocationOnOutlinedIcon />
            </div>
            <div className="secondHeader__addressDiv">
              <span className="header__optionLineOne">Hello</span>
              <span className="header__optionLineTwo">Select your address</span>
            </div>
          </div>
        </div>
        <div className="secondHeader__fill">
          <span href="#" className="secondHeader__btn">
            Mobile
          </span>
          <span href="#" className="secondHeader__btn">
            Best Sellers
          </span>
          <span href="#" className="secondHeader__btn">
            Today's Deals
          </span>
          <span href="#" className="secondHeader__btn">
            Computers
          </span>
          <span href="#" className="secondHeader__btn">
            Pantry
          </span>
          <span href="#" className="secondHeader__btn">
            Books
          </span>
          <span href="#" className="secondHeader__btn">
            New Releases
          </span>
          <span href="#" className="secondHeader__btn">
            Gift Ideas
          </span>
          <span href="#" className="secondHeader__btn">
            Customer Service
          </span>
          <span href="#" className="secondHeader__btn">
            Amazon Pay
          </span>
          <span href="#" className="secondHeader__btn">
            Sell
          </span>
        </div>
        <div className="secondHeader__right">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/ShakuntalaDevi/400x39-SWM_With-Disclaimer_np._CB406908440_.jpg"
            alt="Shakuntala Devi"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
