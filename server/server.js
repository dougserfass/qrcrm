"use strict"
Meteor.startup(function () {
  Meteor.methods({
    updateSoftware: function (targetUserId, software) {
      check(targetUserId, String)
      check(software, [String])

      Meteor.users.update({_id:targetUserId}, {
        $set: {
          software: software
        }
      })
    }
  })
})

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
    /*shortUrl: function (longUrl, result) {
        console.log(longUrl);
        var url = 'https://api-ssl.bitly.com/v3/shorten?access_token=eba13be7f960d1593d40e4b44b4ed929e41c91b5&longUrl=' + longUrl;
        var shortUrl = '';

        $.getJSON(
            url,
            {},
            function(response) {
                shortUrl = response.data.url;
                //return response.data.url;
                //console.log(response.data.url);
            }
        );

        return 'hello';
    }*/
})