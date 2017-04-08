function sortObj(obj) {
    function compareObj(a, b) {
        try { a = JSON.stringify(a); } catch (e) {}
        try { b = JSON.stringify(b); } catch (e) {}
        return a > b ? 1 : -1;
    }

    let res;
    if (obj instanceof Array) {
        for (var item of obj) {
            item = sortObj(item);
        }
        res = obj.sort(compareObj);
    } else if (obj instanceof Object) {
        res = {};
        for (var key of Object.keys(obj).sort()) {
            res[key] = obj[key] instanceof Object ? sortObj(obj[key]) : obj[key];
        }
    } else {
        res = obj;
    }
    return res;
}

