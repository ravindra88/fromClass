class LocalAPI {
    static getAllPostsusingCB(cb) {
        fetch('https://jsonplaceholder.typicode.com/posts').then(function (res) {
            var result = res.json();
            result.then(function (jsonResult) {
                cb(jsonResult);
            });
        }, function (err) {
            console.error(err);
        });
    }

    static getAllPostsusingDefaultPromise() {
        return fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            return response.json();
        }).catch((error) => {
            return error;
        });
    }

    static getAllPostsusingCustomPromise() {
        var p1 = new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
                var result = response.json();
                result.then((jsonResult) => {
                    resolve(jsonResult);
                }, (err) => {
                    reject("JSON Error, Contact Admin..");
                });
            }).catch((error) => {
                reject("Call Error, Contact Admin...");
            });
        });
        return p1;
    }

    static async getAllPosts() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        return data;
    }
}

(async function(){
    var result = await LocalAPI.getAllPosts();
    console.log(result);
})();

(function () {
    LocalAPI.getAllPostsusingCB(function (data) {
        console.log(data);
    });
})();

(function () {
    LocalAPI.getAllPostsusingDefaultPromise().then(function (jsonResult) {
        console.log(jsonResult);
    }, function (err) {
        console.error(err);
    });
})();

(function () {
    LocalAPI.getAllPostsusingCustomPromise().then(function (jsonResult) {
        console.log(jsonResult);
    }, function (err) {
        console.error(err);
    });
})();

