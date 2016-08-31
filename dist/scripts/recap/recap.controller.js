(function ($) {
    'use strict';
    
    angular
        .module('recap')
        .controller('RecapController', RecapController);
    
    RecapController.$inject = ['RecapDataService', 'RecapConstants'];
    
    function RecapController(RecapDataService, RecapConstants) {
        var vm = this;
        
        //Scope Variables
        vm.recaps = {};
        vm.recapimgdir = RecapConstants.RECAP_BASE;
        
        //Scope Function Declarations
        vm.initialize = Initialize;
        vm.getWebm = GetWebm;
        
        //Function Definitions
        function Initialize() {
            RecapDataService.GetRecaps().then(function(data) {
                vm.recaps = data;
            });
        }
        
        function GetWebm(string1, string2){
            return string1+"/"+string2;
        }
        
    }
    
})(jQuery);