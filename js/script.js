
  
 $(function () {
    $(".qa-q").on('click', function () {
      $(".qa-q").not(this).removeClass("open").next().slideUp(300);
      $(this).toggleClass("open").next().slideToggle(300);
    });
   });
   
   
   // jQuery(window).on("scroll", function() {
   //   // トップから1000px以上スクロールしたら
   //   if (1000 < jQuery(this).scrollTop()) {
   //     // is-showクラスをつける
   //  jQuery('.totop').addClass( 'is-show' );
   //   } else {
   //     // 1000pxを下回ったらis-showクラスを削除
   //   jQuery('.totop').removeClass( 'is-show' );
   //   }
   // });
   
   window.addEventListener('scroll', function(){
     if( 1000 < window.scrollY ) {
       document.querySelector('.totop').classList.add('is-show');
     } else {
       document.querySelector('.totop').classList.remove('is-show');
     }
   });
   
   
   // jQuery('.totop').click(function(){
   //   // ページの先頭へ移動する
   //   jQuery('html,body').animate({scrollTop:0}, 'fast');
   // });
   
   const TopBtn = document.querySelector('.totop');
   TopBtn.addEventListener('click', () =>{
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   });
   
   jQuery(".drawer-icon").on("click", function(e) {
     e.preventDefault();
   
     jQuery('.drawer-icon').toggleClass('is-click')
     jQuery('.drawer-content').toggleClass('is-click')
     jQuery('.drawer-background').toggleClass('is-click')
   
     return false;
   });
   
   jQuery(window).on("scroll", function() {
     // トップから1000px以上スクロールしたら
     if (650 < jQuery(this).scrollTop()) {
       // is-showクラスをつける
    jQuery('.header').addClass( 'is-white' );
     } else {
       // 1000pxを下回ったらis-showクラスを削除
     jQuery('.header').removeClass( 'is-white' );
     }
   });
   
   
   jQuery('a[href^="#"]').click(function() {
     var header = jQuery('.header').innerHeight();
     var id = jQuery(this).attr('href');
     var position = jQuery(id).offset().top - header;
     jQuery("html,body").animate({
     scrollTop:position
     },);
     });
   
    
     let $form = $( '#js-form' ) 
    $form.submit(function(e) { 
      $.ajax({ 
       url: $form.attr('action'), 
       data: $form.serialize(), 
       type: "POST", 
       dataType: "xml", 
       statusCode: { 
          0: function() { 
            //送信に成功したときの処理 
            $form.slideUp()
            $( '#js-success' ).slideDown()
          }, 
          200: function() { 
            //送信に失敗したときの処理 
            $form.slideUp()
            $( '#js-error' ).slideDown()
          }
        } 
      });
      return false; 
    });  
   