angular.module('app').component('alertP', {
    templateUrl: 'component/alert.html',
    bindings: {
        msg: '=',
        tipo: '=',
    },
    controllerAs: 'vm',
    controller: function() {
        vm = this
        vm.tipoClass = undefined
        vm.$onInit = function() {
            if (vm.tipo == 'success') {
                vm.tipoClass = 'alert alert-success'
            } else if (vm.tipo == 'erro') {
                vm.tipoClass = 'alert alert-danger'
            } else if (vm.tipo == 'problem') {
                vm.tipoClass = 'alert alert-warning'

            }
        }

    }
})