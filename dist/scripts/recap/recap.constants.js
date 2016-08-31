(function(){
    'use strict';
    
    angular
        .module('recap')
        .constant('RecapConstants',{
           DATA_BASE: 'dist/data/',
           RECAP_BASE: 'dist/recap/',
           RECAPS: 'recap.json',
        });
    
})();