function sortObj(obj) {
    function compareObj(a, b) {
        try {
            a = JSON.stringify(a);
            b = JSON.stringify(b);
        } catch (e) {}

        return a > b ? 1 : -1;
    }

    let res;
    if (obj instanceof Array) {
        res = [];
        for (var item of obj.sort(compareObj)) {
            res.push(item instanceof Object ? sortObj(item) : item);
        }
    } else if (obj instanceof Object) {
        res = {};
        for (var key of Object.keys(obj).sort()) {
            res[key] = obj[key] instanceof Object ? sortObj(obj[key]) : obj[key];
        }
    }
    return res;
}

