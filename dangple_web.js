const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("content");

// 서버 URL
const apiBaseUrl = "http://localhost:3000/api/dog-info";

tabs.forEach((tab) => {
  tab.addEventListener("click", async () => {
    // 탭 활성화
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // 서버에서 데이터 가져오기
    const id = tab.dataset.id;
    try {
      const response = await fetch(`${apiBaseUrl}/${id}`);
      if (!response.ok) {
        throw new Error("데이터를 가져오는데 실패했습니다.");
      }
      const selectedData = await response.json();

      // 콘텐츠 업데이트
      content.innerHTML = `
        <img src="${selectedData.img}" alt="댕댕이 이미지">
        <h2>${selectedData.title}</h2>
        <p>${selectedData.description}</p>

        <div class="popular-content">
          <h3>지금 시기에 인기있는 콘텐츠</h3>
          <div class="thumbnails">
            <a href="https://www.youtube.com/watch?v=NYUb8fn8aYw" target="_blank">
              <img src="https://img.youtube.com/vi/NYUb8fn8aYw/1.jpg" alt="썸네일 1">
            </a>
            <a href="https://www.youtube.com/watch?v=NYUb8fn8aYw" target="_blank">
              <img src="https://img.youtube.com/vi/NYUb8fn8aYw/2.jpg" alt="썸네일 2">
            </a>
            <a href="https://www.youtube.com/watch?v=NYUb8fn8aYw" target="_blank">
              <img src="https://img.youtube.com/vi/NYUb8fn8aYw/3.jpg" alt="썸네일 3">
            </a>
          </div>
        </div>
      `;
    } catch (error) {
      console.error("에러 발생:", error);
      content.innerHTML = `<p>데이터를 불러오는 중 문제가 발생했습니다.</p>`;
    }
  });
});
