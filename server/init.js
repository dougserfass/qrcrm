Meteor.startup(function () {
    if (Software.find().count() === 0) {
        Software.insert({name: "software1"});
    }
    if (qrCode.find().count() === 0) {
        qrCode.insert({text: encodeURIComponent("http://jindo.dev.naver.com/collie")});
    }
});