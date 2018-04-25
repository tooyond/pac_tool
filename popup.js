// let changeColor = document.getElementById('changeColor');
// chrome.storage.sync.get('color', function (data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
// });
let $$ = mdui.JQ;
$$(() => {
    var inst = new mdui.Tab('#tabs');
    $$("#setting_btn").on('click', e => {
        inst.show('tab_setting');
    })
    $$("#domain_btn").on('click', e => {
        inst.show('tab_domain');
    })
    chrome.storage.sync.get('pac_file_path', data => {
        $$("#file_path_input").val(data.pac_file_path)
    })
    $$("#file_path_input").on('click', e => {
        $$("#file_input").trigger('click')
    })
    $$("#file_input").on('change', e => {
        $$("#file_path_input").val($$("#file_input").val())
        chrome.storage.sync.set({ pac_file_path: $$("#file_input").val() }, () => {
        })
    })
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let url = tabs[0].url
        let domainName = /\/\/(([^\.^\/]+\.)*([^\.^\/]+))/.exec(url)[1]
        let strArr = domainName.split(".");
        let domainNameArr = []
        if (strArr.length >= 3) {
            strArr = strArr.reverse()
            domainNameArr.push(strArr[1] + '.' + strArr[0])
            domainNameArr.push(strArr[2] + '.' + strArr[1] + '.' + strArr[0])
        } else {
            domainNameArr.push(domainName)
        }
        domainNameArr.map(domain => {
            $$("#domain_list").append(`<li class="domain_li mdui-list-item mdui-ripple" domain="${domain}">"${domain}":1,</li>`)
        })
        mdui.mutation();
        $$(".domain_li").on('click', e => {
            let domain = $$(e.target).attr('domain')
            let text = `
  "${domain}":1,`
            copyTextToClipboard(text)
            mdui.snackbar({
                message: '已把代码复制到剪切板，请打开pac文件粘贴'
            });
        })
    });
})

function copyTextToClipboard(text) {
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom); copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
} 