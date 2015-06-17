Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});
Router.map(function() {
    this.route('defaultLanding', {path: '/'});
    this.route('createSoftware');
    this.route('vm');
    this.route('hW');
    this.route('readQrCode');
    this.route('createProduct');
    this.route('readProduct', {
        path: '/product/:_id',
        waitOn: function() {
            return Meteor.subscribe('singleProduct', this.params._id);
        },
        data: function() { return Product.findOne(this.params._id); }
    });
    this.route('createCase');
    this.route('readCase', {
        path: '/case/:_id',
        waitOn: function() {
            return Meteor.subscribe('singleCase', this.params._id);
        },
        data: function() { return Case.findOne(this.params._id); }
    });
    this.route('importProduct', {
        waitOn: function() {
            var callback = function (productImports) {

                console.log('productImports='+productImports);

                var test = [{pId:"P1",cId:"C1",sId:"S1",mId:"M1",wed:"07/20/2015"},{pId:"P2",cId:"C2",sId:"S2",mId:"M2",wed:"12/03/2015"}];

                console.log('test='+test);

                console.log('test.length='+test.length);

                for (var i = 0; i < test.length; i++) {
                    console.log(test[i].pId);
                    console.log(test[i].cId);
                    console.log(test[i].sId);
                    console.log(test[i].mId);
                    console.log(test[i].wed);
                }

            };
            var url = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl'+
                '?script=965'+
                '&deploy=1'+
                '&compid=TSTDRV1310110'+
                '&h=8bd74adbbdab4c43cec7';
            var data = '';
            $.ajax({
                url: url,
                dataType: 'jsonp',
                crossDomain: true,
                data: data,
                success: callback,
                error: callback
            });
        }
/*
        waitOn: function() {
            var callback = function (number) {
                console.log(number);
                var aCase = {
                    number: number.replace(/"/g,""),
                    name: 'a',
                    phone: '1234567890',
                    email: 'a@b.com',
                    message: 'b'
                }
                var caseId = Case.insert(aCase);
                alert('A support case no. '+aCase.number+' has been created. Thank you!');
            };
            var url = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl'+
                '?script=964'+
                '&deploy=1'+
                '&compid=TSTDRV1310110'+
                '&h=698100cbeefe005935e9'+
                '&recordtype=supportcase'+
                '&location=Oz'+
                '&company='+'1'+
                '&product='+'2'+
                '&custeventcase_opened_by='+'a'+
                '&email='+'a@b.com'+
                '&phone='+'1234567890'+
                '&origin=1'+
                '&custevent_s_no='+'a'+
                '&custevent_model_no='+'a'+
                '&is_under_warranty='+'Y'+
                '&warranty_expiry_date='+'12/25/2015'+
                '&messagenew=Y'+
                '&incomingmessage='+'a';
            var data = '';
            $.ajax({
                url: url,
                dataType: 'jsonp',
                crossDomain: true,
                data: data,
                success: callback,
                error: callback
            });
        }
*/
    });
});
/*
var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('defaultLanding');
  } else {
    this.next();
  }
}
Router.onBeforeAction('loading');
*/

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate);
        else
            this.render('defaultLanding');
    } else {
        this.next();
    }
}
Router.onBeforeAction('loading');
//Router.onBeforeAction(requireLogin, {only: 'taskSubmit'});
Router.onBeforeAction(requireLogin, {except: ['readProduct','createCase','readCase']});