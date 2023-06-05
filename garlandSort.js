$(document).ready(function () {
    var $grid = $('.product-list').isotope({
      itemSelector: '.card',
      getSortData: {
        price: function (itemElem) {
          return $(itemElem).find('.card-text').data('price');
        },
        name: function (itemElem) {
          return $(itemElem).find('.card-title').data('name');
        }
      },

    });

    $('.filter-dropdown').on('click', 'a', function () {
      var filterValue = $(this).attr('data-filter');

      resetFilterButtons();
      $(this).addClass('active');

      if (filterValue === '.bouquet') {
        $('#changeCategory').text('Bouquet');
      } else if (filterValue === '.garland') {
        $('#changeCategory').text('Garland');
      } else if (filterValue === '.backdrop') {
        $('#changeCategory').text('Panel Backdrop');
      } else {
        $('#changeCategory').text('Featured Product');
      }

      $grid.isotope({ filter: filterValue });
    });

    $('.sort-dropdown').on('click', 'a', function () {
      var sortValue = $(this).attr('data-sort');
      var sortAscending = true;

      resetSortButtons();
      $(this).addClass('active');

      if (sortValue === 'h2l') {
        sortValue = 'price';
        sortAscending = false;
      } else if (sortValue === 'l2h') {
        sortValue = 'price';
        sortAscending = true;
      } else if (sortValue === 'name-asc') {
        sortValue = 'name';
        sortAscending = true;
      } else if (sortValue === 'name-desc') {
        sortValue = 'name';
        sortAscending = false;
      }

      $grid.isotope({ sortBy: sortValue, sortAscending: sortAscending });
    });

    var filterButtons = $('.filter-dropdown').find('a');
    var sortButtons = $('.sort-dropdown').find('a');

    function resetFilterButtons() {
      filterButtons.each(function () {
        $(this).removeClass('active');
      });
    }

    function resetSortButtons() {
      sortButtons.each(function () {
        $(this).removeClass('active');
      });
    }

    // Initial filtering and sorting
    $grid.isotope({ filter: '.garland' });

  });