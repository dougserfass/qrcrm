Template.createQrCode.events({
    'submit form': function(e) {
        e.preventDefault();
        var qrcode = {
            text: encodeURIComponent($(e.target).find('[name=text]').val())
        }
        qrCode.insert(qrcode);
        Router.go('readQrCode', {}, { query: "text=" + qrcode.text });
        location.reload();
    }
});