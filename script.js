const d = document,
  $email = d.querySelector(".email"),
  $details = d.querySelector(".details");

d.addEventListener("keyup", (e) => {
  if (e.target === $email) {
    let $input = e.target,
      pattern = $input.pattern;

    if (pattern && $input.value !== "") {
      let regex = new RegExp(pattern);
      if (!regex.exec($input.value)) {
        $input.classList.add("is-active");
        $details.classList.add("is-active");
      } else {
        $input.classList.remove("is-active");
        $details.classList.remove("is-active");
      }
    }
  }
});
