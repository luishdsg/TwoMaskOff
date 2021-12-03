angular.module('app').controller('HomeController', HomeController)
HomeController.$inject = ['$location', 'CService', ];

function HomeController($location, CService, ) {
    vm = this;
    vm.test = 'usuarios'
    vm.usuarios = ''
    vm.errordb = false


    vm.init = function() {
        vm.listUsuarios()

    }

    vm.nav = function(rota, id) {
        $location.path(rota + '/' + id)
    }

    vm.listUsuarios = function() {
        CService.exec_GET().then(function(resposta) {
            if (resposta) {
                vm.usuarios = resposta
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
        vm.nav('/post', id)

    }
}