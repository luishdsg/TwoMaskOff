angular.module('app').controller('PostController', PostController)
PostController.$inject = ['$location', 'CService', '$routeParams'];

function PostController($location, CService, $routeParams) {
    vm = this;
    vm.usuario = {}
    vm.iduser = undefined
    vm.butao = 'Send'



    if ($routeParams.iduser) {
        vm.iduser = $routeParams.iduser
        search(vm.iduser)
        vm.butao = 'Send'

    }

    vm.nav = function(rota) {
        $location.path(rota)
    }
    vm.posting = function() {
        if (vm.butao == 'Send') {
            CService.exec_POST(vm.usuario).then(function(resposta) {
                if (resposta) {
                    vm.usuarios = resposta
                }
            })
        } else if (vm.butao == 'Editar') {
            CService.exec_PUT(vm.usuario).then(function(resposta) {
                if (resposta) {
                    vm.usuarios = resposta
                }
            })
        }
        vm.nav('/')
    }


    function search(id) {
        CService.exec_GET_ID(id).then(function(resposta) {
            if (resposta) {
                vm.usuario = resposta
            }
        })

    }
    vm.limpar = function() {
        vm.usuario = {}
    }

}