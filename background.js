chrome.runtime.onInstalled.addListener(function () {
    // chrome.storage.sync.set({ color: '#3aa757' }, function () {
    //     console.log("The color is green.");
    // });
    // chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    //     chrome.declarativeContent.onPageChanged.addRules([{
    //         conditions: [new chrome.declarativeContent.PageStateMatcher({
    //             pageUrl: { hostEquals: 'developer.chrome.com' },
    //         })
    //         ],
    //         actions: [new chrome.declarativeContent.ShowPageAction()]
    //     }]);
    // });
    // chrome.browserAction.onClicked.addListener(function (tab) {
    //     let url = tab.url
    //     var domainName = /\/\/(([^\.^\/]+\.)*([^\.^\/]+))/.exec(url)[1]
    //     var strArr = domainName.split(".");
    //     var domainNameArr=[]
    //     if(strArr.length>=3){
    //         strArr = strArr.reverse()
    //         domainNameArr.push(strArr[2]+'.'+strArr[1]+'.'+strArr[0])
    //         domainNameArr.push(strArr[1]+'.'+strArr[0])
    //     }else{
    //         domainNameArr.push(domainName)
    //     }
    //     console.log(domainNameArr)
    // });
});