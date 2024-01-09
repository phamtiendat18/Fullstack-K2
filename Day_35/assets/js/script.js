//Khai báo
import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;
let page = 1;
let limit = PAGE_LIMIT;

window.addEventListener("scroll", async () => {
  const news = document.querySelector(".news");
  const loading = document.querySelector(".loading");

  const pageHeight = news.clientHeight;

  const scrollY = window.scrollY;

  if (scrollY > pageHeight * PAGE_LIMIT * page - 500) {
    loading.style.display = "block";
    setTimeout(() => {
      loading.style.display = "none";
      limit += PAGE_LIMIT;
    }, 2000);
    page++;
  }
  query._limit = limit;
  getPosts(query);
});
const query = {
  _limit: PAGE_LIMIT,
};
const stripHtmlTag = (html) => html.replace(/<[^>]*>?/gm, "");
const render = (posts) => {
  const postsEl = document.querySelector(".posts");
  postsEl.innerHTML = `
    
        ${posts
          .map(
            ({ avatar, name, content, image }) =>
              `
        <section class="news">
            <div class="header-news">
            <div class="header-news-left">
            <a href="#" class="avatar">
                <img src="${stripHtmlTag(avatar)}" alt="" />
            </a>
            <span class="client-name">${stripHtmlTag(name)}</span>
            </div>
            <div class="header-news-right">
            <i class="fa-solid fa-ellipsis"></i>
            <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <div class="content-news">
            <p class="content">${stripHtmlTag(content)}</p>
            <div class="image">
            <img src="${stripHtmlTag(image)}" alt="" />
            </div>
        </div>
        <div class="interact">
            <div class="likes">
            <div class="like-icon">
                <i class="fa-solid fa-thumbs-up"></i>
            </div>
            <span>999,9K</span>
            </div>
            <div class="other">
            <div class="comment-icon">
                <span>999</span>
                <i class="fa-solid fa-comment"></i>
            </div>
            <div class="share-icon">
                <span>99</span>
                <i class="fa-solid fa-share"></i>
            </div>
            </div>
        </div>
        <hr />
        <div class="action-news">
            <div class="like-action">
            <i class="fa-regular fa-thumbs-up"></i>
            <span>Thích</span>
            </div>
            <div class="comment-action">
            <i class="fa-regular fa-comment"></i>
            <span>Bình luận</span>
            </div>
            <div class="share-action">
            <i class="fa-solid fa-share"></i>
            <span>Chia sẻ</span>
            </div>
        </div>
      </section>
        `
          )
          .join("")}
    
    `;
};
const getPosts = async (query = {}) => {
  //Chuyển đổi object query => query string
  const queryString = new URLSearchParams(query).toString();
  const { data: posts } = await client.get(`/posts?${queryString}`);
  render(posts);
};

getPosts(query);
