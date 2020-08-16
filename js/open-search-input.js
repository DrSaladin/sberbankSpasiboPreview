'use strict';

( function () {
const pageSearchInput = document.querySelector('.user-block__search-input');
const pageSearchLabel = document.querySelector('.user-block__search-label');
const pageSearchButton = document.querySelector('.user-block__search-button');

var openSearch = () => {
  pageSearchButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    pageSearchInput.classList.toggle('user-block__search-input--hidden');
  });
};

var closeSearch = () => {
  pageSearchLabel.addEventListener('click', function (evt) {
    evt.preventDefault();

    pageSearchInput.style.display = "flex";
  });
}

openSearch();
//closeSearch();

})();
