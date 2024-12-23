$(function () {
  // 會員登入按鈕
  $('.member-login-popup__btn').click(function () {
    $('.member-login .popup__wrap').fadeIn(100);//會員登入出現
    $('.member-login .popup__box').removeClass('transform--out').addClass('transform--in');
    $('.psw-back-end .popup__wrap').fadeOut(100);//密碼信箱關閉
    $('.psw-back-end .popup__box').removeClass('transform--in').addClass('transform--out');
  });//會員登入按鈕結束
  //會員註冊燈箱取消按鈕點擊後，跳出會員登入燈箱
  $('#member-register').click(function () {
    $('#getPsw-erroMsg').html('');
    $('#login-erroMsg').html('');
    $('#register-erroMsg').html('');
    $('.register .popup__wrap').fadeOut(100);//會員註冊關閉
    $('.register .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.member-login .popup__wrap').fadeIn(100);//會員登入出現
    $('.member-login .popup__box').removeClass('transform--out').addClass('transform--in');    
  });//會員註冊取消按鈕結束
  // 註冊燈箱黑幕點擊
  $('.register .popup__wrap').click(function (e) {
    $('#getPsw-erroMsg').html('');
    $('#login-erroMsg').html('');
    $('#register-erroMsg').html('');  
    $('.register .popup__wrap').fadeOut(100);//會員註冊關閉
    $('.register .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.member-login .popup__wrap').fadeIn(100);//會員登入出現
    $('.member-login .popup__box').removeClass('transform--out').addClass('transform--in');    
    e.preventDefault();
  });// 註冊燈箱黑幕點擊結束
  //會員註冊X按鈕點擊後，跳出會員登入燈箱
  $('.register .close-btn').click(function () {
    $('#getPsw-erroMsg').html('');
    $('#login-erroMsg').html('');
    $('#register-erroMsg').html('');
    $('.register .popup__wrap').fadeOut(100);//會員註冊關閉
    $('.register .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.member-login .popup__wrap').fadeIn(100);//會員登入出現
    $('.member-login .popup__box').removeClass('transform--out').addClass('transform--in');    
  });//會員註冊X按鈕結束
  // 燈箱關閉按鈕
  $('.member-login-popup__close').click(function (e) {
    $('#getPsw-erroMsg').html('');
    $('#login-erroMsg').html('');
    $('#register-erroMsg').html('');
    $('.member-login .popup__wrap').fadeOut(100);//會員登入關閉
    $('.member-login .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.psw-back .popup__wrap').fadeOut(100);//取回密碼關閉
    $('.psw-back .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.psw-back-end .popup__wrap').fadeOut(100);//密碼信箱關閉
    $('.psw-back-end .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.qrcode_popup .popup__wrap').fadeOut(100);//QR關閉
    $('.qrcode_popup .popup__box').removeClass('transform--in').addClass('transform--out');
    e.preventDefault();
    //停止超連結預設超連結行為
  });
  // 註冊燈箱出現
  $('#register').click(function (e) {
    $('#login-erroMsg').html('');
    $('#register-erroMsg').html('');
    $('#getPsw-erroMsg').html('');
    $('.register .popup__wrap').fadeIn(100);//會員註冊出現
    $('.register .popup__box').removeClass('transform--out').addClass('transform--in');
    $('.member-login .popup__wrap').fadeOut(100);//會員登入關閉
    $('.member-login .popup__box').removeClass('transform--in').addClass('transform--out');
    e.preventDefault();
    //停止超連結預設超連結行為
  });//註冊燈箱出現結束
  // 取回密碼燈箱
  $('#psw-back').click(function (e) {
    $('.psw-back .popup__wrap').fadeIn(100);//取回密碼出現
    $('.psw-back .popup__box').removeClass('transform--out').addClass('transform--in');
    $('.member-login .popup__wrap').fadeOut(100);//會員登入關閉
    $('.member-login .popup__box').removeClass('transform--in').addClass('transform--out');
    e.preventDefault();
    //停止超連結預設超連結行為
  });//取回密碼燈箱結束
  //取回密碼燈箱黑幕點擊
  $('.psw-back .popup__wrap').click(function () {
    $('#login-erroMsg').html('');
    $('#register-erroMsg').html('');
    $('#getPsw-erroMsg').html('');
    $('.psw-back .popup__wrap').fadeOut(100);//取回密碼關閉
    $('.psw-back .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.member-login .popup__wrap').fadeIn(100);//會員登入出現
    $('.member-login .popup__box').removeClass('transform--out').addClass('transform--in');    
  });//取回密碼黑幕點擊結束
  //取回密碼燈箱取消按鈕點擊
  $('#psw-back-cancel').click(function () {
    $('#login-erroMsg').html('');
    $('#register-erroMsg').html('');
    $('#getPsw-erroMsg').html('');
    $('.psw-back .popup__wrap').fadeOut(100);//取回密碼關閉
    $('.psw-back .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.member-login .popup__wrap').fadeIn(100);//會員登入出現
    $('.member-login .popup__box').removeClass('transform--out').addClass('transform--in');    
  });//取回密碼取消按鈕點擊結束
  //取回密碼X按鈕點擊
  $('.psw-back .close-btn').click(function () {
    $('#login-erroMsg').html('');
    $('#register-erroMsg').html('');
    $('#getPsw-erroMsg').html('');
    $('.psw-back .popup__wrap').fadeOut(100);//取回密碼關閉
    $('.psw-back .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.member-login .popup__wrap').fadeIn(100);//會員登入出現
    $('.member-login .popup__box').removeClass('transform--out').addClass('transform--in');    
  });//取回密碼X按鈕點擊結束
  //已取回密碼燈箱黑幕點擊
  $('.psw-back-end .popup__wrap').click(function () {
    $('#login-erroMsg').html('');
    $('#register-erroMsg').html('');
    $('#getPsw-erroMsg').html('');
    $('.psw-back-end .popup__wrap').fadeOut(100);//取回密碼關閉
    $('.psw-back-end .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.member-login .popup__wrap').fadeIn(100);//會員登入出現
    $('.member-login .popup__box').removeClass('transform--out').addClass('transform--in');    
  });//已取回密碼黑幕點擊結束
  //已取回密碼X點擊
  $('.psw-back-end .close-btn').click(function () {
    $('#login-erroMsg').html('');
    $('#register-erroMsg').html('');
    $('#getPsw-erroMsg').html('');
    $('.psw-back-end .popup__wrap').fadeOut(100);//取回密碼關閉
    $('.psw-back-end .popup__box').removeClass('transform--in').addClass('transform--out');
    $('.member-login .popup__wrap').fadeIn(100);//會員登入出現
    $('.member-login .popup__box').removeClass('transform--out').addClass('transform--in');    
  });//已取回密碼X點擊結束
});
