function confirmation(msg, yes, no) {
    var confirmDialogBox = $("#confirmDialogBox");
    confirmDialogBox.scrollTop = confirmDialogBox.scrollHeight;
    confirmDialogBox.find(".message").text(msg);
    confirmDialogBox.find(".yes,.no").unbind().click(function () {
        confirmDialogBox.hide();
    });
    confirmDialogBox.find(".yes").click(yes);
    confirmDialogBox.find(".no").click(no);
    confirmDialogBox.show();
}

$(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        var form = this;
        confirmation("Are you sure you want to upload the images to the IBEIS database?", function yes() {
            form.submit();
        }, function no() {
            
        });
    });
});
