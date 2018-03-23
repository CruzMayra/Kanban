const priorities = {
    edit(e) {
        e.preventDefault();
        $('.modal').modal();
        $('select').material_select();
    },
    selectColor(e){
      
    }
}

module.exports = priorities;