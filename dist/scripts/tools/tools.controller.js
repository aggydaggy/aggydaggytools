(function ($) {
    'use strict';
    
    angular
        .module('tools')
        .controller('ToolsController', ToolsController);
    
    ToolsController.$inject = ['$timeout','ToolsDataService'];
    
    function ToolsController($timeout, ToolsDataService) {
        var vm = this;
        
        //Scope Variables
        //vm.heroImageURL = '';
        vm.demoDays = {};
        vm.gameJams = {};
        vm.engines = {};
        vm.suggestion = {
            contact: '',
            idea: ''
        }
        vm.ideaMessage = '';
        vm.ideaError = '';
        vm.submitted = false;
        vm.maxChars = 500;
        
        //Scope Function Declarations
        vm.initialize = Initialize;
        vm.submitIdea = SubmitIdea;
        
        //Function Definitions
        function Initialize() {
            ToolsDataService.GetGameJams().then(function(data) {
                vm.gameJams = data;
            });
            
            ToolsDataService.GetDemoDays().then(function(data) {
                vm.demoDays = data;
            });
            
            ToolsDataService.GetEngines().then(function(data){
                vm.engines = data; 
            });
        }
        
        function SubmitIdea() {
            vm.ideaMessage = '';
            vm.ideaError = '';
            vm.submitted = true;
            if (vm.maxChars < vm.suggestion.idea.length) {
                vm.ideaError = "You entered too much feedback in the box, anon.";
                vm.submitted = false;
            } else {
                if (vm.suggestion.idea) {
                    ToolsDataService.SubmitIdea(vm.suggestion).then(function(success) {
                    if(success) {
                        $timeout(function() {
                            vm.submitted = true;
                            vm.ideaMessage = "Thanks anon, I got your message."; 
                        },0);
                    } else {
                        $timeout(function() {
                            vm.ideaError = "Something went wrong sending the message.  Probably firebase fucking up.  Try again in a little bit.";
                            vm.submitted = false;
                        },0);
                            
                    }
                    });
                } else {
                    vm.ideaError = "You didn't enter any feedback in the box, anon.";
                    vm.submitted = false;
                }
            }
        }
    }
    
})(jQuery);