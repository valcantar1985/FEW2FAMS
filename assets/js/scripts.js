// carousel
$(document).ready(function () {

    const $carousel = $('#carousel');
    const $items = $carousel.find('.carousel-item');
    const $indicators = $carousel.find('.carousel-indicators button');
    const $next = $carousel.find('.control-next');
    const $prev = $carousel.find('.control-prev');

    let currentIndex = 0;
    const totalItems = $items.length;
    const intervalTime = 5000; // 5 seconds
    let autoSlideInterval;

    function showItem(index) {
        $items.removeClass('d-block').addClass('d-none');
        $items.eq(index).removeClass('d-none').addClass('d-block');

        $indicators.removeClass('active');
        $indicators.eq(index).addClass('active');

        currentIndex = index;
    }

    function nextItem() {
        const nextIndex = (currentIndex + 1) % totalItems;
        showItem(nextIndex);
    }

    function prevItem() {
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(prevIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextItem, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Init
    showItem(currentIndex);
    startAutoSlide();

    // Controls
    $indicators.each(function (index) {
        $(this).on('click', function () {
            stopAutoSlide();
            showItem(index);
            startAutoSlide();
        });
    });

    $next.on('click', function () {
        stopAutoSlide();
        nextItem();
        startAutoSlide();
    });

    $prev.on('click', function () {
        stopAutoSlide();
        prevItem();
        startAutoSlide();
    });
    // carousel ends


    // menu tabs
    $('.tab-link').on('click', function(e) {
        e.preventDefault();

        // Remove 'active' class from all tabs and tab content
        $('.tab-link').removeClass('active');
        $('.tab-content').removeClass('active');

        // Add 'active' class to clicked tab
        $(this).addClass('active');

        // Get the data-tb attribute to match the corresponding tab-content ID
        const tabId = $(this).data('tb');
        $('#' + tabId).addClass('active');
    });
    // menu tabs ends
    
});