$(function () {

    //初始化页面
    searchFun("", "");

    //监听回车事件
    $(document).keydown(function (event) {
        if (event.keyCode == 13) {
            goSearch();
        }
    });

    show_site_runtime();

});


function goSearch() {
    var apiType = $('#apiType option:selected').val();
    var kw = $.trim($("#keyword").val());
    if (apiType == "" || apiType == null || apiType == undefined) {
        layer.msg("请先选择音乐平台！");
        return false;
    }
    searchFun(apiType, kw);
}

/**
 * 执行方法
 * @param kw
 * @param api
 */
function searchFun(api, kw) {
    var autoplay = true;//是否自动播放
    var metingStr = "";

    if (api == "" || api == null || api == undefined && kw == "") {//初始化
        metingStr = "<meting-js server='netease' type='playlist' id='3778678'><meting-js>";
        $(".audio-body-div").html(metingStr);
    }

    if (api != "" && api != null && api != undefined && kw != "" && kw != null && kw != undefined) {//
        metingStr = "<meting-js server='" + api + "' type='search' id='" + kw + "' autoplay='" + autoplay + "'><meting-js>";
        $(".audio-body-div").html(metingStr);
    }


}


/**
 * 调用js进行下载
 * 方法参数：地址,"名字.mp3","audio/mp3"
 */
function downMp3() {
    var src = $(".aplayer-title").attr('music-src');
    var songName = $(".aplayer-title").text() + $(".aplayer-author").text();
    download(src, songName + ".mp3", "audio/mp3")
}