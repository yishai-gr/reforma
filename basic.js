var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "/basic.css";
head.appendChild(link);
async function load_nav_and_footer() {
  const nav = document.createElement("div");
  nav.innerHTML = await (await fetch("/nav and footer/nav.html")).text();
  const footer = document.createElement("div");
  footer.innerHTML = await (await fetch("/nav and footer/footer.html")).text();
  document.body.prepend(nav);
  document.body.append(footer);
}
window.addEventListener("load", () => {
  load_nav_and_footer();
});
