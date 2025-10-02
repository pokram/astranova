//   HamburgerMenu

const toggleButton = document.querySelector('.NavbarToggle');
const dropDownMenu = document.querySelector('.DropdownMenu');

toggleButton.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active');
    toggleButton.classList.toggle('active');
});