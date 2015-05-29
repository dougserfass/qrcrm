Template.readProduct.helpers({
    selected: function(id) {
        if(id==this.id){
            return true;
        }
        return false;
    }
})