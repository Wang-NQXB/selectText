function selectText(parent, children, event) {
    $(parent).on(event, children, function (event) {
        var range, selection, that = this;
        if (document.body.createTextRange) {
            // IE
            range = document.body.createTextRange();
            range.moveToElementText(that);
            range.select();
        } else if (window.getSelection) {
            // Others
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(that);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    });
}