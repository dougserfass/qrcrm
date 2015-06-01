Template.readProduct.helpers({
    selectedProduct: function(id) {
        if(id==this.id){
            return true;
        }
        return false;
    },
    selectedCompany: function(companyId) {
        if(companyId==this.companyId){
            return true;
        }
        return false;
    }
})