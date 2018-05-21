;(function () {

    $(function () {

        // Modal

        $(document).on("click", "*[data-modal]", function () {

            var $target = $(this).attr("data-modal");

            $("*.modal#" + $target + "").addClass("open");

        });

        $(document).on("click", ".modal-close, .modal .close", function() {
            $(".modal.open").removeClass("open");
        });


        // Sidebars

        $(document).on("click", ".sidebar .label", function (evt) {

            evt.preventDefault();

            var $this = $(this).parent(".sidebar");
            $($this).toggleClass("open");
            $($this).find("span.icon > i").toggleClass("fa-chevron-up fa-chevron-down");

        });


        // Dropdowm

        var $dropdown = ".dropdown";

        $(document).on("click", $dropdown, function (evt) {
            evt.stopPropagation();
            $(this).addClass("open");

        });

        $(document).on("click", function () {
            $($dropdown).removeClass("open");
        });


        $(document).on("click", ".showcode", function (evt) {
            evt.preventDefault();

            var $btn = this;
            var $htmlCode = $($btn).parent(".html-code");

            $htmlCode.addClass("open");

        });


    });

})(jQuery);


document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                $el.classList.toggle('open');
                $target.classList.toggle('open');

            });
        });
    }

});