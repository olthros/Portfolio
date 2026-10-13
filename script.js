const mealsContainer = document.getElementById("meals");

mealsContainer.addEventListener("click", (e) => {
  const mealE1 = e.target.closest(".meal");
  if (!mealE1) return;

  const url = mealE1.getAttribute("data-url");
  if (url) {
    window.open(url, "_blank");
  } 
});
