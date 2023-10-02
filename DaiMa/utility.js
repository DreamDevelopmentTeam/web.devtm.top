function downloadFile(url) {
    var form = $('<form>');//定义一个form表单
    form.attr("style", "display:none");
    form.attr("target", "");
    form.attr("method", "post");
    form.attr("action", url);
    var input1 = $("<input>");
    input1.attr("type", "hidden");
    input1.attr("name", "exportData");
    input1.attr("value", (new Date()).getMilliseconds());
    $("body").append(form);//将表单放置在web中
    form.append(input1);
    form.submit();
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function myEval(responseText) {
    if (responseText == null || responseText == undefined) {
        return;
    }
    if (responseText.indexOf('<script>') == -1) {
        return;
    }
    var script = responseText.replace('<script>', '').replace('<\/script>', '');
    eval(script);
}
function jQueryDownloadFile(layer, url) {
    $.fileDownload(url, {
        httpMethod: "POST",
        prepareCallback: function () {
            layer.load();
        },
        successCallback: function (url) {
            layer.closeAll('loading');
            layer.alert('下载成功');
        },
        failCallback: function (responseHtml, url) {
            layer.alert('下载失败');
        }
    });
}