import View from './View.js';

import icons from '../../img/icons.svg'; //Parcel 1
// import icons from 'url:../img/icons.svg'; //Parcel 2

class PaginationView extends View {
	_parentElement = document.querySelector('.pagination');

	addHandlerClick(handler) {
		this._parentElement.addEventListener('click', function (e) {
			const button = e.target.closest('.btn--inline');

			if (!button) return;

			const goToPage = +button.dataset.goto;

			handler(goToPage);
		});
	}

	_generateMarkup() {
		const currentPage = this._data.page;
		const numPages = Math.ceil(
			this._data.results.length / this._data.resultsPerPage
		);
		// Page 1, and there are other pages
		if (currentPage === 1 && numPages > 1) {
			return `
            <button data-goto="${
				currentPage + 1
			}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
		}
		// Last pages
		if (currentPage === numPages && numPages > 1) {
			return `
            <button data-goto="${
				currentPage - 1
			}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>`;
		}
		// Other pages
		if (currentPage < numPages) {
			return `
            <button data-goto="${
				currentPage - 1
			}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
          
          <button data-goto="${
				currentPage + 1
			}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button`;
		}
		// Page 1, and there are no other pages
		return '';
	}
}

export default new PaginationView();
