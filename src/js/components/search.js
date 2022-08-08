const searchBtn = document.querySelector('.header__wrap-btn');
const searchClose = document.querySelector('.header__form-closed');
const searchForm = document.querySelector('.header__form');

searchBtn.addEventListener('click', () => {
  searchBtn.classList.add('header__wrap-btn-hidden');
  searchForm.classList.add('header__form-active');
});

searchClose.addEventListener('click', () => {
  searchBtn.classList.remove('header__wrap-btn-hidden');
  searchForm.classList.remove('header__form-active');
});

document.addEventListener("click", e => {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".header__wrap")) {
  form.classList.remove("header__form-active");
    form.querySelector("input").value = "";
    document.querySelector(".header__wrap-btn").classList.remove("header__wrap-btn-hidden");
  }
});
