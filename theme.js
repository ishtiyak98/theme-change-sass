window.onload = function () {
  link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = `./css/style${getThemeMode() === "dark" ? "-dark" : ""}.css`;
  document.head.appendChild(link);
};

const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => toggleMode(getThemeMode()));

function getThemeMode() {
  return localStorage.getItem("theme") || "light";
}

function toggleMode(mode) {
  mode = mode === "light" ? "dark" : "light";
  const isDark = mode === "dark";
  if (isDark) document.documentElement.classList.add("dark");
  else document.documentElement.classList.replace("dark", "light");
  document.head.lastChild.href = `./css/style${isDark ? "-dark" : ""}.css`;
  localStorage.setItem("theme", mode);
}
