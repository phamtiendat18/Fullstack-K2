import "./Footer.css";
import image from "../../../assets/my-image.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="about-company">
          <a href="/">
            <img src={image.src} alt="" width={50} />
          </a>
          <h3>Đây là CV của tôi, Hãy phản hồi lại tôi nhé !</h3>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <ul>
            <li>
              Phone:{" "}
              <a target="_blank" href="#">
                0866812202
              </a>
            </li>
            <li>
              Zalo:{" "}
              <a target="_blank" href="#">
                My Zalo
              </a>
            </li>
            <li>
              Email:{" "}
              <a target="_blank" href="#">
                phamtiendat2002nd@gmail.com
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100063562215112"
              >
                My Facebook
              </a>
            </li>
            <li>
              YouTube:{" "}
              <a target="_blank" href="https://www.youtube.com/@F8VNOfficial">
                My Official
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 Fullstack.edu.vn F8. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
