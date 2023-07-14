window.addEventListener("load", () => {
  const form = document.getElementById("join-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    console.log(data);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    })
      .then(() => {
        console.log("Success!");
      })
      .catch((error) => {
        console.error("Failed");
      });
  });
});
