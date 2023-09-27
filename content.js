const elms = document.querySelectorAll("#contents *");

const filterElms = Array.from(elms).filter(
  (elm) => elm.textContent === "ショート"
);

const initialLoop = setInterval(() => {
  for (elm of filterElms) {
    if (elm.closest("#content")) {
      const target = elm.closest("#content");
      target.style.display = "none";
    }
    clearInterval(initialLoop);
  }
}, 500);
