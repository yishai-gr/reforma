async function load_nav_and_footer() {
  document.body.innerHTML =
    (await (await fetch("../nav and footer/nav.html")).text()) +
    document.body.innerHTML +
    (await (await fetch("../nav and footer/footer.html")).text());
}
load_nav_and_footer();
