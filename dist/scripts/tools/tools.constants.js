(function(){
    'use strict';
    
    angular
        .module('tools')
        .constant('ToolsConstants',{
           DATA_BASE: 'dist/data/',
           IMG_BASE: 'dist/imgs/',
           GAMEJAMS: 'gamejamdata.json',
           DEMODAYS: 'demodaydata.json',
           HEROIMGS: 'heroimagelist.json' ,
           ENGINES: 'enginedata.json'
        });
    
})();