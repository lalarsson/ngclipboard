/*! ngclipboard - v1.1.1 - 2016-04-20
* https://github.com/sachinchoolur/ngclipboard
* Copyright (c) 2016 Sachin; Licensed MIT */
(function() {
    'use strict';
    var MODULE_NAME = 'ngclipboard';
    var Clipboard = require('clipboard');


    angular.module(MODULE_NAME, [])
        .directive('ngclipboard', function() {
            return {
                restrict: 'A',
                scope: {
                    ngclipboardSuccess: '&',
                    ngclipboardError: '&'
                },
                link: function(scope, element) {
                    var clipboard = new Clipboard(element[0]);

                    clipboard.on('success', function(e) {
                        scope.$apply(function() {
                            scope.ngclipboardSuccess({
                                e: e
                            });
                        });
                    });

                    clipboard.on('error', function(e) {
                        scope.$apply(function() {
                            scope.ngclipboardError({
                                e: e
                            });
                        });
                    });

                }
            };
        });
})();
