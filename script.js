let active = document.querySelector(".active");
const list = document.querySelector(".book-list");
const items = document.querySelectorAll(".book");
const btn = document.querySelector("button");

btn.onclick = function () {
  const index = document.querySelector("#current-page").value - 1;
  scroll(+index);
};

function scroll(index) {
  if (index < 0 || index > items.length) {
    console.error("Out of index");
    return;
  }

  active.classList.remove("active");
  items[index].classList.add("active");
  active = items[index];

  console.dir(active);
  const itemOffSetLeft = active.offsetLeft;
  const itemStyle = window.getComputedStyle(active);
  const itemWidth = active.offsetWidth;

  const listWidth = list.clientWidth;

  const newOffSetLeft = Math.floor(
    itemOffSetLeft - listWidth / 2 + itemWidth / 2
  );
  console.log(listWidth);
  console.log(newOffSetLeft);

  list.scroll({
    left: newOffSetLeft,
    behavior: "smooth",
  });
}
