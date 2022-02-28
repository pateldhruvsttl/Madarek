
const Loader = require('../../App');
let isLoding = false;


module.exports = {

    isBusy: () => {
        return !isLoding
    },

    onLoding: (value) => {
        isLoding = value;
        
        Loader.onLoding(value);
    },

 }




