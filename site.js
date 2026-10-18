// Mobile menu + image lightbox for adrienne.fyi
(function () {
  var menu = document.getElementById("m-menu");
  var openBtn = document.querySelector(".m-open");
  var closeBtn = document.querySelector(".m-close");

  function openMenu() {
    menu.hidden = false;
    menu.classList.remove("is-open");
    void menu.offsetWidth; // restart the swipe animation
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");
    openBtn.setAttribute("aria-expanded", "true");
    closeBtn.focus();
  }
  function closeMenu(returnFocus) {
    menu.hidden = true;
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    openBtn.setAttribute("aria-expanded", "false");
    if (returnFocus) openBtn.focus();
  }

  if (menu && openBtn && closeBtn) {
    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", function () { closeMenu(true); });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu(false); // follow the link, menu goes away
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) closeMenu(true);
    });
    // rotating an iPad to landscape shows the desktop nav: close the overlay
    window.matchMedia("(min-width: 901px)").addEventListener("change", function (mq) {
      if (mq.matches && !menu.hidden) closeMenu(false);
    });
  }

  // click a ".zoom" image to view it full size; click or Esc closes
  document.addEventListener("click", function (e) {
    var link = e.target.closest("a.zoom");
    if (!link) return;
    e.preventDefault();
    var box = document.createElement("div");
    box.className = "lightbox";
    var img = document.createElement("img");
    img.src = link.getAttribute("href");
    img.alt = (link.querySelector("img") || {}).alt || "";
    img.onload = function () { if (img.naturalHeight <= img.naturalWidth * 1.2) box.classList.add("is-wide"); };
    box.appendChild(img);
    function close() { box.remove(); document.removeEventListener("keydown", onKey); }
    function onKey(ev) { if (ev.key === "Escape") close(); }
    box.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    document.body.appendChild(box);
  });
})();
