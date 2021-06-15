const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-side-menu');
const closeMobileMenu = document.getElementById('close-drawer-menu');
const backdrop = document.getElementById('backdrop');
const dropdownMenuLink = document.getElementById('menu-dropdown-link');
const dropdownMenuWrapper = document.getElementById('dropdown-menu-wrapper');
const websiteLoader = document.getElementById('website-loader');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show-drawer');
  backdrop.classList.remove('hide');
});
closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('show-drawer');
  backdrop.classList.add('hide');
});
dropdownMenuLink.addEventListener('mouseenter', () => {
  dropdownMenuWrapper.classList.remove('hide');
});
dropdownMenuWrapper.addEventListener('mouseleave', () => {
  dropdownMenuWrapper.classList.add('hide');
});
dropdownMenuLink.addEventListener('mouseleave', () => {
  dropdownMenuWrapper.classList.add('hide');
});
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    websiteLoader.classList.add('hide');
  }, 3000);
});
