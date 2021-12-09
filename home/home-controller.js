angular.module('app').controller('HomeController', HomeController)
HomeController.$inject = ['$location', 'CService', ];

function HomeController($location, CService, ) {
    vm = this;
    vm.test = 'jinxs'
    vm.jinxs = ''
    vm.errordb = false


    vm.init = function() {
        vm.listJinxs()

    }

    vm.nav = function(rota, id) {
        $location.path(rota + '/' + id)
    }

    vm.listJinxs = function() {
        CService.exec_GET().then(function(resposta) {
            if (resposta) {
                vm.jinxs = resposta
            } else {
                vm.errordb = true
            }
        })
    }
    vm.excluir = function(id) {
        CService.exec_DEL(id).then(function(resposta) {
            if (resposta) {

            }
        })
    }
    vm.edit = function(id) {
        vm.nav('/post', id);
    }
}