angular.module("app").factory("CService", CService);
CService.$inject = ["$http"]

function CService($http) {
    const REST = 'http://localhost:3000/c'
    var service = {
        exec_GET: function() {
            return $http.get('http://localhost:3000/c').then(resolvResp, resolvError)
        },
        exec_GET_ID: function(id) {
            return $http.get(REST + '/' + id).then(resolvResp, resolvError)
        },

        exec_DEL: function(id) {
            return $http.delete(REST + '/' + id).then(resolvResp, resolvError)
        },
        exec_POST: function(jinx) {
            return $http.post(REST, jinx).then(resolvResp, resolvError)
        },
        exec_PUT: function(jinx) {
            return $http.put(REST + '/' + jinx.id, jinx).then(resolvResp, resolvError)
        },
    }

    function resolvResp(response) {
        return response.data;
    }

    function resolvError(error) {
        return error.data;
    }
    return service
}