document.querySelectorAll(".sidebar-submenu").forEach((e) => {
  e.querySelector(".sidebar-menu-dropdown").onclick = (event) => {
    event.preventDefault();
    e.querySelector(".sidebar-menu-dropdown .dropdown-icon").classList.toggle(
      "active"
    );

    let dropdown_content = e.querySelector(".sidebar-menu-dropdown-content");
    let dropdown_content_lis = dropdown_content.querySelectorAll("li");

    let active_height =
      dropdown_content_lis[0].clientHeight * dropdown_content_lis.length;

    dropdown_content.classList.toggle("active");

    dropdown_content.style.height = dropdown_content.classList.contains(
      "active"
    )
      ? active_height + "px"
      : "0";
  };
});

setDarkChart = (dark) => {
  let theme = {
    theme: {
      mode: dark ? "dark" : "light",
    },
  };

  customer_chart.updateOptions(theme);
  category_chart.updateOptions(theme);
};

// DARK MODE TOGGLE
let darkmode_toggle = document.querySelector("#darkmode-toggle");

darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  document.querySelector("body").classList.toggle("dark");
  darkmode_toggle.querySelector(".darkmode-switch").classList.toggle("active");
  setDarkChart(document.querySelector("body").classList.contains("dark"));
};

let overlay = document.querySelector(".overlay");
let sidebar = document.querySelector(".sidebar");

document.querySelector("#mobile-toggle").onclick = () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
};

document.querySelector("#sidebar-close").onclick = () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
};
