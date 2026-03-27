const titleEl = document.getElementById("title");
const descriptionEl = document.getElementById("description");
const buttonEl = document.getElementById("helloBtn");
const messageEl = document.getElementById("message");

async function loadSettings() {
  try {
    const response = await fetch("setting.json");
    if (!response.ok) {
      throw new Error("無法讀取 setting.json");
    }

    const settings = await response.json();
    titleEl.textContent = settings.siteTitle;
    descriptionEl.textContent = settings.siteDescription;

    buttonEl.addEventListener("click", () => {
      messageEl.textContent = settings.welcomeMessage;
    });
  } catch (error) {
    titleEl.textContent = "載入失敗";
    descriptionEl.textContent = "請確認是否使用本機伺服器開啟網站。";
    console.error(error);
  }
}

loadSettings();
