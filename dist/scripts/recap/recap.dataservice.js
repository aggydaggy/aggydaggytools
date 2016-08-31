(function ($) {
    'use strict';
    
    angular
        .module('recap')
        .factory('RecapDataService', RecapDataService);
    
    RecapDataService.$inject = ['$http', 'RecapConstants'];
    
    function RecapDataService($http, RecapConstants) {
        var serviceCalls = {
            GetRecaps: GetRecaps
        };
        return serviceCalls;
        
        function GetRecaps() {
            return $http.get(RecapConstants.DATA_BASE + RecapConstants.RECAPS)
                .then(function (data) {
                    for(var i = 0; i < data.data.Recaps.length; i++) {
                        for(var j = 0; j < data.data.Recaps[i].WebMs.length; j++) {
                             data.data.Recaps[i].WebMs[j] = RecapConstants.RECAP_BASE + data.data.Recaps[i].WebMs[j];
                        }
                    }
                    return data.data; 
                });
        }
    }
    
})(jQuery);