angular.module('app').controller('PostController', PostController)
PostController.$inject = ['$location', 'CService', '$routeParams'];

function PostController($location, CService, $routeParams) {
    vm = this;
    vm.text = 'Posting'
    vm.jinx = {}
    vm.iduser = undefined
    vm.butao = 'Send'



    if ($routeParams.iduser) {
        vm.iduser = $routeParams.iduser
        search(vm.iduser)
        vm.butao = 'Edit'

    }

    vm.nav = function(rota) {
        $location.path(rota)
    }
    vm.posting = function() {
        if (vm.butao == 'Send') {
            CService.exec_POST(vm.jinx).then(function(resposta) {
                if (resposta) {
                    vm.jinxs = resposta
                }
            })
        } else if (vm.butao == 'Edit') {
            CService.exec_PUT(vm.jinx).then(function(resposta) {
                if (resposta) {
                    vm.jinxs = resposta
                }
            })
        }
        vm.nav('/')
    }


    function search(id) {
        CService.exec_GET_ID(id).then(function(resposta) {
            if (resposta) {
                vm.jinx = resposta
            }
        })

    }
    vm.limpar = function() {
        vm.jinx = {}
    }

}