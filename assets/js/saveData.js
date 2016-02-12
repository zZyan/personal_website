
function postContactToGoogle() {
    var email = $('#Email').val();
    var name = $('#Name').val();
    var message = $('#Message').val();

        $.ajax({
            url: "https://docs.google.com/forms/d/1iTg0GAnKfE5G5xM9bQUN2xxRAZhwQeO8MtCsHHicznc/formResponse",
            data: { "entry_1147909464": email,
            "entry_1799186405": name, "entry_421700642": message },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    window.location.replace("index.html");
                },
                200: function () {
                    window.location.replace("index.html");
                }
            }
        });
}

function openInNewTab(url){
    var win = window.open(url, '_blank');
    win.focus();
}
