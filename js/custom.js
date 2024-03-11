
  (function ($) {

    // AOS ANIMATIONS
    AOS.init();

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // NEWS IMAGE RESIZE
    function NewsImageResize(){
      $(".navbar").scrollspy({ offset: -76 });
      
      var LargeImage = $('.large-news-image').height();

      var MinusHeight = LargeImage - 6;

      $('.news-two-column').css({'height' : (MinusHeight - LargeImage / 2) + 'px'});
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    // $('a[href*="#"]').click(function (event) {
    //   if (
    //     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //     var target = $(this.hash);
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //     if (target.length) {
    //       event.preventDefault();
    //       $('html, body').animate({
    //         scrollTop: target.offset().top - 66
    //       }, 1000);
    //     }
    //   }
    // });
    
  })(window.jQuery);

  

var modal = document.getElementById("videoModal");

document.querySelectorAll('.card-blog').forEach(item => {
  item.addEventListener('click', function () {
    var videoUrl = this.getAttribute('data-videourl');
    var iframe = document.getElementById('video');
    iframe.src = videoUrl + "?autoplay=1";
    modal.style.display = "block";
  });
});

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById('video').src = '';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  // 给每个tab绑定点击事件
  document.querySelectorAll('.tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      const group = this.closest('.tabs').getAttribute('data-tab-group');
      const category = this.textContent.trim().toLowerCase(); // 获取并标准化类别名称

      // 设置当前组内tab的活动状态
      document.querySelectorAll(`.tabs[data-tab-group="${group}"] .tab`).forEach(function(tab) {
        tab.classList.remove('tabactive');
      });
      this.classList.add('tabactive');

      // 过滤当前组内的内容
      filterContent(category, group);
    });
  });
});

function filterContent(category, group) {
  document.querySelectorAll(`.category[data-tab-group="${group}"]`).forEach(function(item) {
    const itemCategories = item.getAttribute('data-category').toLowerCase().split(',').map(c => c.trim());
    if (itemCategories.includes(category) || category === 'all') {
      item.style.display = ''; // 显示匹配的内容
    } else {
      item.style.display = 'none'; // 隐藏不匹配的内容
    }
  });
}