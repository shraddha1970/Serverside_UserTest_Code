let multichain = require("multichain-node")({
    port: 9566 ,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "7YhsagsdzpLigwwGajiexPAw7DGQimtAWhqcgaboCnFR"
 });
 
 function saveScore(params) {
    return new Promise((resolve) => {
        var response;
        var key = params.Key;
        var hexstring;
        var value = (params.Score);
        let bufStr = Buffer.from(value, 'utf8');
        hexstring = bufStr.toString('hex');

        multichain.publish({
            stream: "userinfo",
            key:key,
            data: hexstring
        }, (err, res) => {
            if (err == null) {
                return resolve({
                    response: res
                });
            } else {
                console.log(err)
            }
        })
 
 })
   
 }
 module.exports = {
    saveScore: saveScore
 };