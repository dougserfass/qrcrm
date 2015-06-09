Template.readProduct.events({
    'click #export': function(e) {
        //location.reload();
        e.preventDefault();
        html2canvas($("#qrcode"), {
            background :'#FFFFFF',
            onrendered: function(qrcode) {
                var imgData = qrcode.toDataURL('image/jpeg');
                var doc = new jsPDF();
                doc.text(10, 10, 'serial number '+getSerialNumber());
                doc.addImage(imgData, 'JPEG', 10, 20);
                doc.save(getSerialNumber()+'.pdf');
            }
        });
    }
});