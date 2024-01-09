const wrapper = document.querySelector(".wrapper");
let img = wrapper.querySelector(".image");
let imageWith = img.clientWidth;
let imageHeight = img.clientHeight;
let zoom = 3;
// Tạo phần tử div để chứa ảnh phóng to
let imageZoom = document.createElement("div");
imageZoom.setAttribute("class", "img-zoom-result");
cssZoom = {
  width: `${imageWith}px`,
  height: `${imageHeight}px`,
  backgroundRepeat: "no-repeat",
};
Object.assign(imageZoom.style, cssZoom);
wrapper.appendChild(imageZoom);
let zoomZone = document.createElement("div");
img.append(zoomZone);

// Tạo chức năng phóng to ảnh
const handleZoom = (e) => {
  zoomZone.classList.add("zoom");
  let y = e.clientY - img.getBoundingClientRect().top;
  let x = e.clientX - img.getBoundingClientRect().left;
  let zoneTop = y - zoomZone.clientHeight / 2;
  let zoneLeft = x - zoomZone.clientWidth / 2;
  zoomZone.style.width = `${imageWith / zoom}px`;
  zoomZone.style.height = `${imageHeight / zoom}px`;
  if (zoneLeft >= imageWith - zoomZone.clientWidth) {
    zoneLeft = imageWith - zoomZone.clientWidth;
    x = imageWith - zoomZone.clientWidth / 2;
  }
  if (zoneLeft <= 0) {
    zoneLeft = 0;
    x = zoomZone.clientWidth / 2;
  }
  if (zoneTop >= imageHeight - zoomZone.clientHeight) {
    zoneTop = imageHeight - zoomZone.clientHeight;
    y = imageHeight - zoomZone.clientHeight / 2;
  }
  if (zoneTop <= 0) {
    zoneTop = 0;
    y = zoomZone.clientHeight / 2;
  }
  zoomZone.style.left = `${zoneLeft}px`;
  zoomZone.style.top = `${zoneTop}px`;
  imageZoom.style.backgroundImage = "url(./assets/img/zoom_img.jpg)";
  imageZoom.style.backgroundSize = `${imageWith * zoom}px ${
    imageHeight * zoom
  }px`;
  imageZoom.style.backgroundPosition = `${-x * zoom + imageWith / 2}px ${
    -y * zoom + imageHeight / 2
  }px`;
};
// Gán sự kiện khi di chuyển vào trong ảnh
img.addEventListener("mousemove", handleZoom);
zoomZone.addEventListener("mousemove", handleZoom);

// Xóa chức năng phóng to khi di chuyển chuột ra khỏi ảnh
const handleOut = () => {
  imageZoom.style.backgroundImage = "none";
  zoomZone.classList.remove("zoom");
};
// Gán sự kiện khi di chuyển ra ngoài ảnh
img.addEventListener("mouseout", handleOut);
zoomZone.addEventListener("mouseout", handleOut);
