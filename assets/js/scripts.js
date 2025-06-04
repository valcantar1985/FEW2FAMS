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
    

    // back to top
    const btn = $('.toTop');
    btn.hide(); // Hide initially


    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
        btn.fadeIn();
        } else {
        btn.fadeOut();
        }
    });

    btn.click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '700');
    });
     // back to top ends


    $(function () {
        $('.rate i').each(function (index) {
            const $icon = $(this);
            setTimeout(function () {
            $icon.addClass('visible');
            setTimeout(function () {
                $icon.addClass('settled');
            }, 300);
            }, index * 120);
        });
    });

    $('.card').on('click', function() {
        const imgSrc = $(this).find('img').attr('src');
        const title = $(this).find('.card-title').text();
        const desc = $(this).find('.card-desc').text();
        const ing = $(this).find('.card-ingredients').text();

    
        $('#modalImg').attr('src', imgSrc);
        $('#modalTitle').text(title);
        $('#modalDesc').text(desc);
        $('#modalIng').text(ing);

    
        $('#menuModal').fadeIn();
      });
    
      $('.close-btn').on('click', function() {
        $('#menuModal').fadeOut();
      });
    
      // Optional: close modal if user clicks outside content
      $('#menuModal').on('click', function(e) {
        if ($(e.target).is('#menuModal')) {
          $(this).fadeOut();
        }
      });


});