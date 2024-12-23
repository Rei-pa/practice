function $id(id) {
  return document.getElementById(id);
}
function $class(className) {
  return document.getElementsByClassName(className);
}
function $all(all) {
  return document.querySelectorAll(all);
} 
$id('getPsw-erroMsg').style.color = 'red';
$id('login-erroMsg').style.color = 'red';
$id('register-erroMsg').style.color = 'red';//錯誤訊息紅色
//登入
  function sendForm(){
    var xhr = new XMLHttpRequest(); 
    if($id('memId').value == ''){
        $id('memId').focus();
        $id('login-erroMsg').innerHTML = '請輸入帳號!';
    }else if($id('memPsw').value == ''){
        $id('memPsw').focus();
        $id('login-erroMsg').innerHTML = '請輸入密碼!';
    }else{
    xhr.onload = function (){//=====使用Ajax 回server端
      if( xhr.responseText == "not found"){
        $id('memId').value = '';
        $id('memPsw').value = '';
        $id('memId').focus();
        $id('login-erroMsg').innerHTML = '帳號密碼錯誤!';
      }else if(xhr.responseText == "stop"){
        $id('memId').value = '';
        $id('memPsw').value = '';
        $id('memId').focus();
        $id('login-erroMsg').innerHTML = '此帳號已被停權!';
      }else if(xhr.responseText == "error"){
        $id('memId').value = '';
        $id('memPsw').value = '';
        $id('memId').focus();
        $id('login-erroMsg').innerHTML = '系統錯誤!';
      }else{ //帳密登入成功
        $('.member-login .popup__wrap').fadeOut(100);//會員登入關閉
        $('.member-login .popup__box').removeClass('transform--in').addClass('transform--out');
        $('.loginsuccess_popup .popup__wrap').fadeIn(100);//登入成功出現
        $('.loginsuccess_popup .popup__box').removeClass('transform--out').addClass('transform--in');
        setTimeout(function(){
          $('.loginsuccess_popup .popup__wrap').fadeOut(100);//登入成功關閉
          $('.loginsuccess_popup .popup__box').removeClass('transform--in').addClass('transform--out');
        },1000);
        $id('login-on02').classList.remove("member-login-popup__btn");
        $id('member-Img').src ="img/header-img/HD-mamber04.png";
        $id('login-on').href = "member.php";
        $id('login-on01').href = "member.php";
        $id('spanLogin').innerHTML = '會員中心';
        $id('memId').value = '';
        $id('memPsw').value = '';
        history.go(0);
      }
    }
    var url = "ajaxLogin_JSON.php";
    xhr.open("post", url, true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");  
    var member = {};
    member.memId = document.getElementById("memId").value;
    member.memPsw = document.getElementById("memPsw").value;
    var data_info = "jsonStr=" + JSON.stringify( member );
    xhr.send(data_info);

    }
  }//登入結束
//登入取消
  function cancelLogin(){
    //將登入表單上的資料清空，並將燈箱隱藏起來
    $id('memId').value = '';
    $id('memPsw').value = '';
    $id('login-erroMsg').innerHTML = '';
    $id('register-erroMsg').innerHTML = '';
  }//登入取消結束
//註冊
  function registerForm(){
    //=====使用Ajax 回server端
    var xhr = new XMLHttpRequest(); 
    if($id('Register-memId').value == '' || $id('Register-memId').value.length < 3 || $id('Register-memId').value.length > 10){
      $id('Register-memId').focus();
      $id('register-erroMsg').innerHTML = '帳號請大於 3 碼，或是小於10碼!';
      
    }else if($id('Register-memPsw').value == '' || $id('Register-memPsw').value.length <3 ||$id('Register-memPsw').value.length >10){
      $id('Register-memPsw').focus();
      $id('Register-memPsw').value = '';
      $id('Register-memPsw-Check').value = '';
      $id('register-erroMsg').innerHTML = '密碼請大於 3 碼，或是小於10碼!';
      
    }else if($id('Register-memPsw').value != $id('Register-memPsw-Check').value){
      $id('Register-memPsw').focus();
      $id('Register-memPsw').value = '';
      $id('Register-memPsw-Check').value = '';
      $id('register-erroMsg').innerHTML = '確認密碼不一致!';
      
    }else if($id('Register-memName').value == ''){
      $id('Register-memName').focus();
      $id('register-erroMsg').innerHTML = '姓名不能空白!';
      
    }else if($id('Register-memTel').value == '' || $id('Register-memTel').value.length < 9){
      $id('Register-memTel').focus();
      $id('Register-memTel').value = '';
      $id('register-erroMsg').innerHTML = '請輸入正確電話!';
      
    }else if($id('Register-memEmail').value==''||$id('Register-memEmail').value.indexOf("@") < 1 || $id('Register-memEmail').value.indexOf(".com") < 3 ){
      $id('Register-memEmail').focus();
      $id('register-erroMsg').innerHTML = '請輸入正確信箱!';
    }else{
      xhr.onload = function (){
        if( xhr.responseText == "error"){//註冊失敗
          $id('Register-memId').value = '';
          $id('Register-memId').focus();
          $id('register-erroMsg').innerHTML = '帳號重複!';
        }else{ //註冊成功
          $('.registersuccess_popup .popup__wrap').fadeIn(100);//註冊成功出現
          $('.registersuccess_popup .popup__box').removeClass('transform--out').addClass('transform--in');
          setTimeout(function(){
            $('.registersuccess_popup .popup__wrap').fadeOut(100);//註冊成功關閉
            $('.registersuccess_popup .popup__box').removeClass('transform--in').addClass('transform--out');
          },1000);
          $('.register .popup__wrap').fadeOut(100);//會員註冊關閉
          $('.register .popup__box').removeClass('transform--in').addClass('transform--out');
          $('.member-login .popup__wrap').fadeIn(100);//會員登入出現
          $('.member-login .popup__box').removeClass('transform--out').addClass('transform--in');
          
          $id('Register-memId').value = '';
          $id('Register-memPsw').value = '';
          $id('Register-memPsw-Check').value = '';
          $id('Register-memName').value = '';
          $id('Register-memTel').value = '';
          $id('Register-memEmail').value = '';
        } //註冊成功
      }//xhrload結束
        var url = "ajaxRegister_JSON.php";
        xhr.open("post", url, true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");  
        var member = {};
        member.memName = document.getElementById("Register-memName").value;
        member.memId = document.getElementById("Register-memId").value;
        member.memPsw = document.getElementById("Register-memPsw").value;
        member.memEmail = document.getElementById("Register-memEmail").value;
        member.memTel = document.getElementById("Register-memTel").value;
        var data_info = "jsonStr=" + JSON.stringify( member );
        xhr.send(data_info);

    }//資訊輸入沒錯else
  }//註冊結束
  function getPswForm(){
    //=====使用Ajax 回server端
    var xhr = new XMLHttpRequest(); 
    if($id('getPsw-memId').value == ''){
      $id('getPsw-memId').focus();
      $id('getPsw-erroMsg').innerHTML = '帳號不能空白!';
    }else if($id('getPsw-memEmail').value == ''){
      $id('getPsw-memEmail').focus();
      $id('getPsw-erroMsg').innerHTML = '信箱不能空白!';
    }else{
      xhr.onload = function (){
        if( xhr.responseText == "not found"){//失敗
          $id('getPsw-memId').value = '';
          $id('getPsw-memEmail').value = '';
          $id('getPsw-memId').focus();
          $id('getPsw-erroMsg').innerHTML = '帳號、信箱錯誤!';
        }else if( xhr.responseText == "error"){//失敗
          $id('getPsw-memId').value = '';
          $id('getPsw-memEmail').value = '';
          $id('getPsw-memId').focus();
          $id('getPsw-erroMsg').innerHTML = '帳號、信箱錯誤!';
        }else{ //取回密碼成功
          $('.psw-back-end .popup__wrap').fadeIn(100);//密碼信箱出現
          $('.psw-back-end .popup__box').removeClass('transform--out').addClass('transform--in');
          $('.psw-back .popup__wrap').fadeOut(100);//取回密碼關閉
          $('.psw-back .popup__box').removeClass('transform--in').addClass('transform--out');
          
          $id('getPsw-memPswBack').innerHTML = '您的信箱：'+$id('getPsw-memEmail').value;
          $id('getPsw-memId').value = '';
          $id('getPsw-memEmail').value = '';
        } //取回密碼成功結束
      }//xhrload結束
        var url = "ajaxgetPsw_JSON.php";
        xhr.open("post", url, true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");  
        var member = {};
        member.memId = document.getElementById("getPsw-memId").value;
        member.memEmail = document.getElementById("getPsw-memEmail").value;
        var data_info = "jsonStr=" + JSON.stringify( member );
        xhr.send(data_info);

    }//資訊輸入沒錯else
  }//取回密碼結束