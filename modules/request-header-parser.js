// Parses the Language e.g. ( en-US,en;q=0.8 -> en-US )
module.exports.parseLanguage = acceptLanguage => acceptLanguage.replace(/,.+$/,'');

// Parses the Software e.g. (Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36 -> Macintosh; Intel Mac OS X 10_11_6) 
module.exports.parseSoftware = userAgent => userAgent.replace(/^.+?\(/,'').replace(/\).+$/,'');
