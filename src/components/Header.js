const Title = () => (
  <a href="/">
    <img
      alt="Tasty Delights Logo"
      className="logo"
      src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/hzv1pcaqfxtlvbzkw1bi"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav__items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
