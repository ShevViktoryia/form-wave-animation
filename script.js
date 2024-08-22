const fields_container = document.querySelectorAll(".fields-container label");

fields_container.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (char, ind) =>
        `<span style="transition-delay: ${ind * 50}ms">${char}</span>`
    )
    .join("");
});
