Template.createCase.events({
    'submit form': function(e) {
    //'click #submit': function(e) {
        e.preventDefault();
/*
        var accessToken = 'eba13be7f960d1593d40e4b44b4ed929e41c91b5';
        var url = 'https://api-ssl.bitly.com/v3/shorten?access_token=' + accessToken + '&longUrl=' + encodeURIComponent($(e.target).find('[name=text]').val());
        $.getJSON(
            url,
            {},
            function(response)
            {
                var qrcode = {
                    text: encodeURIComponent(response.data.url),
                    machineName: $(e.target).find('[name=machineName]').val(),
                    serialNumber: $(e.target).find('[name=serialNumber]').val()
                }
                var id = qrCode.insert(qrcode);
                console.log(Router.routes.qrCodePage.url({ _id: id }));
                Router.go('readQrCode', {}, { query: "text=" + qrcode.text });
                location.reload();
                //console.log(response.data.url);
                //if(callback)
                //callback(response.data.url);
            }
        );
*/
/*
        var data = {id: '24567', user: '23455'};
        var url = 'https://forms.netsuite.com/app/site/hosting/scriptlet.nl?script=23&deploy=1&compid=434534&h=88603ee219c4dc2d8b56&callback=?';
        $.getJSON(url,
            data)
            .done(function(data){
                myCallBack(data)
            })
*/
/*
        var url = 'https://forms.netsuite.com/app/site/hosting/scriptlet.nl?script=23&deploy=1&compid=434534&h=88603ee219c4dc2d8b56';
        $.getJSON(
            url,
            {id: '24567', user: '23455'},
            function(response)
            {
                console.log(response.data);
                var product = {
                    name: $(e.target).find('[name=name]').val(),
                    serialNumber: $(e.target).find('[name=serialNumber]').val(),
                    url: ''
                }
                var productId = Product.insert(product);
                Product.update(productId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
                Router.go('readQrCode', {}, { query: "url=" + encodeURIComponent(Router.routes.readProduct.url({ _id: productId })) });
                location.reload();
            }
        );
*/
/*
        var url = 'https://forms.netsuite.com/app/site/hosting/scriptlet.nl?script=23&deploy=1&compid=434534&h=88603ee219c4dc2d8b56&callback=?';
        $.getJSON(url, function(jsonp){
            console.log(JSON.stringify(jsonp, null, 2));
        });
*/
/*
        var pm_url = 'http://twitter.com/status';
        pm_url += '/user_timeline/stephenfry.json';
        pm_url += '?count=10&callback=photos';
        var photos = function (data) {
            alert(data);
        };
        $.ajax({
            url: pm_url,
            dataType: 'jsonp',
            jsonpCallback: photos,
            jsonp: false
        });
*/
/*
        var callback = function (data) {
            console.log(data);
        };
        var data = '';
        $.ajax({
            url: "http://www.geonames.org/postalCodeLookupJSON?postalcode=19067&country=US",
            dataType: 'jsonp',
            crossDomain: true,
            data: data,
            success: callback,
            error: callback
        });
*/



/*
        $.ajax({
            url: "https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=963&deploy=1",
            data: {
                "recordtype": "supportcase",
                "s_no": "909",
                "model_no": "ABC000123",
                "location": "Oz",
                "inc_mess": "The equipment I bought last weekend was faulty",
                "product" : 3 },
            type: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent-x": "SuiteScript-Call",
                "Authorization": "",
                "Connection": "keep-alive",
                "Content-Type": "application/json"
            },
            success: function() { alert('Success!' + authHeader); }
        });
*/
/*
        $.ajax({
            type: "GET",
            url: "https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=963&deploy=1",
            contentType: "application/json",
            data: JSON.stringify({
                recordtype: "supportcase",
                s_no: "909",
                model_no: "ABC000123",
                location: "Oz",
                inc_mess: "The equipment I bought last weekend was faulty",
                product : 3
            }),
            dataType: "text",
            headers: {
                Accept: "application/json",
                "User-Agent-x": "SuiteScript-Call",
                Authorization: "NLAuth nlauth_email=sahil28v@gmail.com, nlauth_signature=NSoffice22, nlauth_account=TSTDRV1291213, nlauth_role=3",
                Connection: "keep-alive",
                "Content-Type": "application/json"
            },
            success: function( response ){
                console.log(response);
            },
            error: function( error ){
                console.log( "ERROR:", error );
            },
            complete: function(){
            }
        });
*/
/*
        var callback = function (data) {
            console.log(data);

            var aCase = {
                number: 'dummy',
                name: $(e.target).find('[name=name]').val()
            }
            var caseId = Case.insert(aCase);
            Router.go('readCase', {_id: caseId});
            location.reload();

        };

        var data = '{';
        data += '"recordtype":'+'"'+'supportcase'+'"'+",";
        data +=  '"s_no":'+ '"'+'909'+'"'+',';
        data +=   '"model_no":'+ '"'+'ABC000123'+'"'+',';
        data +=   '"location":'+'"'+'Oz'+'"'+',';
        data +=   '"inc_mess":'+'"'+'Test for Suitelete Call'+'"'+',';
        data +=   '"product" :'+ '3';
        data +='}';

        var headers = new Array();
        headers['Content-Type'] = 'application/json' ;

        $.ajax({
            url: "https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl?script=964&deploy=1&compid=TSTDRV1291213&h=ce4725ce2a8e95a56553",
            dataType: 'jsonp',
            crossDomain: true,
            data: data,
            headers: headers,
            success: callback,
            error: callback
        });
*/


        var callback = function (number) {
            //console.log(number);
            var aCase = {
                number: number.replace(/"/g,""),
                name: $(e.target).find('[name=name]').val(),
                phone: $(e.target).find('[name=phone]').val(),
                email: $(e.target).find('[name=email]').val(),
                message: $(e.target).find('[name=message]').val()
            }
            var caseId = Case.insert(aCase);
            //alert('A support case no. '+aCase.number+' has been created. Thank you!');
            Meteor.call('sendEmail',
              aCase.email,
              'admin@qrcrm.meteor.com',
              'Case No: ' + aCase.number,
              'Your case has been created successfully. Thank You!');
            Router.go('readCase', {_id: caseId});
            //location.reload();
        };
        //url: "https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl?script=964&deploy=1&compid=TSTDRV1291213&h=ce4725ce2a8e95a56553&recordtype=supportcase&s_no=909&model_no=ABC000123&location=Oz&inc_mess=TestforSuiteleteCall&product=3",
        var url = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl'+
            '?script=964'+
            '&deploy=1'+
            '&compid=TSTDRV1393278'+
            '&h=66ed9af6cad8ce3f6b90'+
            '&recordtype=supportcase'+
            '&location=Oz'+
            '&company='+$(e.target).find('[name=customerId]').val()+
            '&product='+$(e.target).find('[name=id]').val()+
            '&custeventcase_opened_by='+$(e.target).find('[name=name]').val()+
            '&email='+$(e.target).find('[name=email]').val()+
            '&phone='+$(e.target).find('[name=phone]').val()+
            '&origin=1'+
            '&custevent_s_no='+$(e.target).find('[name=serialNumber]').val()+
            '&custevent_model_no='+$(e.target).find('[name=modelNumber]').val()+
            '&is_under_warranty='+'Y'+
            '&warranty_expiry_date='+$(e.target).find('[name=warrantyExpiryDate]').val()+
            '&messagenew=Y'+
            '&incomingmessage='+$(e.target).find('[name=message]').val();
        var data = '';
        $.ajax({
            url: url,
            dataType: 'jsonp',
            crossDomain: true,
            data: data,
            success: callback,
            error: callback
        });

/*
        var product = {
            name: $(e.target).find('[name=name]').val(),
            serialNumber: $(e.target).find('[name=serialNumber]').val(),
            url: ''
        }
        var productId = Product.insert(product);
        Product.update(productId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
        Router.go('readQrCode', {}, { query: "url=" + encodeURIComponent(Router.routes.readProduct.url({ _id: productId })) });
        location.reload();
*/

    }
});