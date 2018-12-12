(() => {
    'use strict';

    const app = angular.module('app', []);
    app
        .service('newsService', ['$http', function ($http) {
            return {
                getNews: function () {
                    return $http.get('data.json');
                }
            }
        }])
        .controller('newsController', ['$scope', 'newsService', function ($scope, news$) {
            const vm = this;

            vm.title = 'NEWS';


            const init = function () {
                news$
                    .getNews()
                    .then(response => {
                        vm.main = [
                            response.data.section[0].data[0],
                            response.data.section[0].data[1]
                        ];
                        vm.second = [
                            response.data.section[0].data[2],
                            response.data.section[0].data[3]
                        ];
                        vm.third = [
                            response.data.section[0].data[4],
                            response.data.section[0].data[5],
                            response.data.section[0].data[6],
                            response.data.section[0].data[7]
                        ];
                        vm.brasil = response.data.section[1].data;
                        vm.mundo = response.data.section[2].data;
                    }, responseError => {
                        console.error('[ERROR]: ', responseError);
                    });
            };



            init();
        }]);

})();