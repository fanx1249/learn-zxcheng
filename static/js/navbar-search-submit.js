(function () {
  document.addEventListener(
    'keydown',
    function (event) {
      var target = event.target;

      if (
        !target ||
        !target.matches ||
        !target.matches('.navbar__search-input') ||
        event.key !== 'Enter'
      ) {
        return;
      }

      var query = target.value.trim();

      if (!query) {
        return;
      }

      event.preventDefault();
      window.location.href = '/search?q=' + encodeURIComponent(query);
    },
    true,
  );
})();
