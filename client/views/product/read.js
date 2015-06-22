Template.readProduct.helpers({
    selectedProduct: function(id) {
        if(id==this.id){
            return true;
        }
        return false;
    },
    selectedCustomer: function(customerId) {
        if(customerId==this.customerId){
            return true;
        }
        return false;
    }
})