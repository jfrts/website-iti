function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 50) nav.classList.add('active-header');
  else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader);

// Dropdown menu
const dropdownItem1 = document.getElementById("dropdown-item-1");
const dropdownItem2 = document.getElementById("dropdown-item-2");
const dropdownItem3 = document.getElementById("dropdown-item-3");

const menuItem1 = document.getElementById("menu-item-1");
const menuItem2 = document.getElementById("menu-item-2");
const menuItem3 = document.getElementById("menu-item-3");

function showDropdown1(event) {
  event.preventDefault();

  dropdownItem1.classList.toggle('active-dropdown-menu');
  dropdownItem2.classList.remove('active-dropdown-menu');
  dropdownItem3.classList.remove('active-dropdown-menu');
}

function showDropdown2(event) {
  event.preventDefault();

  dropdownItem1.classList.remove('active-dropdown-menu');
  dropdownItem2.classList.toggle('active-dropdown-menu');
  dropdownItem3.classList.remove('active-dropdown-menu');
}

function showDropdown3(event) {
  event.preventDefault();

  dropdownItem1.classList.remove('active-dropdown-menu');
  dropdownItem2.classList.remove('active-dropdown-menu');
  dropdownItem3.classList.toggle('active-dropdown-menu');
}

menuItem1.addEventListener('click', showDropdown1);
menuItem2.addEventListener('click', showDropdown2);
menuItem3.addEventListener('click', showDropdown3);

// BX button
const bx = document.getElementById('bx');
const mobileMenu = document.getElementById('mobile-menu');

function showMobileMenu() {
  bx.classList.toggle('active-bx');
  mobileMenu.classList.toggle('active-menu-mobile');
}

bx.addEventListener('click', showMobileMenu);