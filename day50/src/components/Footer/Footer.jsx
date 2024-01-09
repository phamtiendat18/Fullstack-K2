import "./Footer.css";
import image from "../../../assets/my-image.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info w-full px-[10%]">
        <div className="about-company ">
          <Link href="/">
            <img src={image.src} alt="" width={50} />
          </Link>
          <h3>Đây là CV của tôi, Hãy phản hồi lại tôi nhé !</h3>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <ul>
            <li>
              Phone:{" "}
              <Link target="_blank" href="#">
                0866812202
              </Link>
            </li>
            <li>
              Zalo:{" "}
              <Link target="_blank" href="#">
                My Zalo
              </Link>
            </li>
            <li>
              Email:{" "}
              <Link target="_blank" href="#">
                phamtiendat2002nd@gmail.com
              </Link>
            </li>
            <li>
              Facebook:{" "}
              <Link
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100063562215112"
              >
                My Facebook
              </Link>
            </li>
            <li>
              YouTube:{" "}
              <Link
                target="_blank"
                href="https://www.youtube.com/@F8VNOfficial"
              >
                My Official
              </Link>
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
