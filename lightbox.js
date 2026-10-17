// Click a ".zoom" image to view it full size; click or press Esc to close.
document.addEventListener("click", function (e) {
  var link = e.target.closest("a.zoom");
  if (!link) return;
  e.preventDefault();
  var box = document.createElement("div");
  box.className = "lightbox";
  var img = document.createElement("img");
  img.src = link.getAttribute("href");
  img.alt = (link.querySelector("img") || {}).alt || "";
  box.appendChild(img);
  function close() { box.remove(); document.removeEventListener("keydown", onKey); }
  function onKey(ev) { if (ev.key === "Escape") close(); }
  box.addEventListener("click", close);
  document.addEventListener("keydown", onKey);
  document.body.appendChild(box);
});
