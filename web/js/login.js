
$(document).ready(function () {
    var lab = document.getElementById("logfail");
    $("#login").click(function () {
        lab.innerHTML = "";
        var login = $("#dlogin").val();
        var password = $("#password").val();
        // Checking for blank fields.
        if (login === '' || password === '') {
            $('input[type="text"],input[type="password"]').css("border", "2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
            alert("Please fill all fields...!!!!!!");
        } else {
            var logininfo = login + ";" + password;
            ajaxLogin(logininfo);
        }
    });
    function ajaxLogin(logininfo) {
        $.ajax({
            type: "POST",
            url: "LoginServlet",
            data: "logininfo=" + logininfo,
            success: function (data)
            {
                if (data === 'Invalid Login.......') {
                    $('input[type="text"]').css({"border": "2px solid red", "box-shadow": "0 0 3px red"});
                    $('input[type="password"]').css({"border": "2px solid #00F5FF", "box-shadow": "0 0 5px #00F5FF"});
                    lab.innerHTML = data;
                    //alert(data);
                } else if (data === 'Login or Password is wrong...!!!!') {
                    $('input[type="text"],input[type="password"]').css({"border": "2px solid red", "box-shadow": "0 0 3px red"});
                    lab.innerHTML = data;
                    //alert(data);
                } else if (data === 'Successfully Logged in...') {
                    sessionStore();
                    $("form")[0].reset();
                    $('input[type="text"],input[type="password"]').css({"border": "2px solid #00F5FF", "box-shadow": "0 0 5px #00F5FF"});
                    //Si Login réussit, rediriger vers page d'accueil
                    redirect();
                } else {
                    lab.innerHTML = data;
                }
            }

        });
    }
    function redirect() {
        document.location.href = "http://localhost:8080/AcadySoft/index.html";
        var login= sessionStorage.getItem("login");
        console.log(login);

    }
});

