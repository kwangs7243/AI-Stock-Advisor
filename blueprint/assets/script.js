document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (!button || !nav) return;
  const mobile = window.matchMedia("(max-width: 980px)");
  const sync = () => {
    if (mobile.matches) {
      nav.dataset.collapsed = "true";
      button.hidden = false;
      button.setAttribute("aria-expanded", "false");
    } else {
      delete nav.dataset.collapsed;
      button.hidden = true;
      button.setAttribute("aria-expanded", "true");
    }
  };
  button.addEventListener("click", () => {
    const collapsed = nav.dataset.collapsed === "true";
    nav.dataset.collapsed = String(!collapsed);
    button.setAttribute("aria-expanded", String(collapsed));
  });
  mobile.addEventListener?.("change", sync);
  sync();
});
