$(function(){
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade:true,
      });

    $("a").hover(function(){
        $(this).fadeTo("4000",0.3);
    },function(){
        $(this).fadeTo("4000",1.0);
    });
    
    $("#js-pagetop").click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 400);
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $('#js-pagetop').fadeIn(300).css('display', 'flex')
        } else {
          $('#js-pagetop').fadeOut(300)
        }
      });

       // #で始まるアンカーをクリックした場合に処理
    $('.menu a[href^="#"]').click(function(){
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        const adjust = 0;
        // スクロールの速度
        const speed = 400; // ミリ秒
        // アンカーの値取得
        const href= $(this).attr("href");
        // 移動先を取得
        const target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整
        const position = target.offset().top + adjust;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    $(window).scroll(function (){
        $('section').each(function(){
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
    });

    $(".works img").hover(function(){
        $(this).fadeTo("4000",0.3);
    },function(){
        $(this).fadeTo("1000",1.0);
    });

    // Worksの画像をクリックしたときにモーダルで拡大表示する
    $('.works img').click(function () {
        const imgSrc = $(this).attr('src');
        $('.big-img').attr('src', imgSrc);
        $('.modal').fadeIn();
        return false
    });

    // 閉じるボタンをクリックしたときにモーダルを閉じる
    $('.close-btn').click(function () {
        $('.modal').fadeOut();
        return false
    });
});