import "./Main.css";
import ProjectBox from "../ProjectBox/ProjectBox";
import image from "../../../assets/hoclaptrinh.jpg";
import Link from "next/link";
const Main = () => {
  return (
    <main className="main">
      <div className="header-main">
        <h1>Fullstack.edu.vn F8</h1>
      </div>
      <div className="main-content">
        <aside className="about-me">
          <figure>
            <div className="wrapper-image">
              <div className="des-image">
                <img src={image.src} />
              </div>
            </div>
          </figure>
          <section>
            <div className="des-image"></div>
            <h2>Các kỹ năng của tôi</h2>
            <ul>
              <li>
                <h3>
                  Kỹ năng làm việc: <span>HTML, CSS, JS, React, ...</span>
                </h3>
              </li>
              <li>
                <h3>
                  Các kỹ năng khác: <span>Một vài kỹ năng cơ bản khác</span>
                </h3>
              </li>
            </ul>
          </section>
          <section>
            <h3>Lịch sử học tập, công tác</h3>
            <ul>
              <li>
                <h3>
                  2002-2023:
                  <span>
                    Đã hoàn thành chương trình trung học phổ thông, và đang học
                    đại học
                  </span>
                </h3>
              </li>
            </ul>
          </section>
        </aside>
        <div className="info">
          <section>
            <div className="self-project">
              <div className="self-project-header">
                <h2>Các dự án cá nhân</h2>
              </div>
              <ProjectBox
                title="Doc Editor"
                content="Một dự án nhỏ hoàn thành trong vòng một ngày
Một trang web đơn giản cho phép tạo và chia sẻ các đoạn code. Sử dụng HTML, CSS, JS và custom elements."
                githubLink="https://github.com/phamtiendat18/Fullstack-K2/tree/main/Day_30"
                demoLink="#"
              />
              <ProjectBox
                title="Sopi"
                content="Một dự án nhỏ hoàn thành trong vài ngày
Một trang web đơn giản cho phép tạo và chia sẻ các đoạn code. Sử dụng HTML, CSS, ReactJS"
                githubLink="https://github.com/phamtiendat18/Fullstack-K2/tree/main/Day_46"
                demoLink="https://fullstack-k2-5gfc.vercel.app/"
              />
              <ProjectBox
                title="Merry ChristMas"
                content="Một dự án đi kiếm được trên mạng :)))"
                githubLink="https://github.com/phamtiendat18/ortherfile/tree/main/Merry%20Christmas"
                demoLink="https://phamtiendat18.github.io/ortherfile/Merry%20Christmas/index.html"
              />
            </div>
          </section>
          <section>
            <div className="my-hobbies">
              <h2>Sở thích cá nhân</h2>
              <ul>
                <li>
                  Thưởng Thức Nhạc Lofi, Nhạc Rap Mike, MCK Và Các Nghệ Sĩ
                  Khác,…
                </li>
                <li>Thích Nấu Ăn, Nấu Cho Mọi Người Một Bữa Cơm Ngon,...</li>
                <li>
                  Xem Một Số Phim Anime, Theo Dõi Một Số Công Nghệ Mới Của Một
                  Số Thương Hiệu Nổi Tiếng
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
