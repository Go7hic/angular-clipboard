(function() {
    'use strict';
    angular.module('ngClipboard', []).directive('ngClipboard', function() {
        return {
            restrict: 'A',
            scope: {
                ngClipboardSuccess: '&',
                ngClipboardError: '&'
            },
            link: function(scope, element) {
                var _id = element.attr('id');
                if (!_id) {
                    element.attr('id', 'ngClipboard' + Date.now());
                    _id = element.attr('id');
                }

                var clipboard = new Clipboard('#' + _id);
                clipboard.on('success', function(e) {
                    scope.ngClipboardSuccess({
                        e: e
                    });
                });

                clipboard.on('error', function(e) {
                    scope.ngClipboardError({
                        e: e
                    });
                });
            }
        };
    });

}());
