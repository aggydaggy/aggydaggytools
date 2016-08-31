(function ($) {
    'use strict';
    
    angular
        .module('tools')
        .factory('ToolsDataService', ToolsDataService);
    
    ToolsDataService.$inject = ['$http', 'ToolsConstants'];
    
    function ToolsDataService($http, ToolsConstants) {
        var serviceCalls = {
            GetDemoDays: GetDemoDays,
            GetGameJams: GetGameJams,
            GetEngines: GetEngines,
            SubmitIdea: SubmitIdea
        };
        return serviceCalls;
        
        function GetDemoDays() {
            return $http.get(ToolsConstants.DATA_BASE + ToolsConstants.DEMODAYS)
                .then(function (data) {
                    data.data.DemoDays.reverse();
                    return data.data; 
                });
        }
        
        function GetGameJams() {
            return $http.get(ToolsConstants.DATA_BASE + ToolsConstants.GAMEJAMS)
                .then(function (data) {
                   data.data.GameJams.reverse();
                   return data.data; 
                });
        }
        
        function GetEngines() {
            return $http.get(ToolsConstants.DATA_BASE + ToolsConstants.ENGINES)
                .then(function(data) {
                   return data.data; 
                });
        }
        
        function SubmitIdea(suggestion) {
            return firebase.database().ref('suggestions/').push(suggestion)
                .then(function(result) {
                   return true;
                }, function (error) {
                    return false;
                });
        }
        
    }
    
})(jQuery);