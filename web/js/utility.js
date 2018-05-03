// Имя файла: utility.js
//Описание: полезные функции

function sendAjaxRequestOuvrage(method, params, callback) {
    if (params === null) params = "";		
    $.ajax({
        url:"GetOuvrageServlet",
        type: "POST",
        data:"action=" + method + "&" + params,
        success: function(response){
            // if error
            var errIdx = response.indexOf("ERR_");
            if (errIdx > -1) {
                var errText = response.substr(errIdx);
                alert(errText);
            } else {
                // appelons callback
                try {
                    callback(response);
                } catch (e) {
                    if (console) console.error(e);
                    alert('Error in callback: ' + e);
                }
            }
        },
        error: function(errMsg) {
            alert('Error: ' + errMsg);
        }
    });   
}
