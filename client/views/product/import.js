Meteor.startup(function () {
    Meteor.subscribe('productImport')
})

Template.importProduct.helpers({
    productImports: function () {
        return ProductImport.find()
    }
})
