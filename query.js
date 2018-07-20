let multichain = require("multichain-node")({
    port: 9566,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "7YhsagsdzpLigwwGajiexPAw7DGQimtAWhqcgaboCnFR"
});

function getscore(params) {

    return new Promise((resolve) => {
        var userDetails = [];
        var key = params.Key;
        var response;
        multichain.listStreamKeyItems({
            stream: "userinfo",
            key: key,

        }, (err, res) => {

            if (err == null) {

                for (let i = 0; i < res.length; i++) {
                    var string = '';
                    var data = res[i].data;
                    string = Buffer.from(data, 'hex').toString();

                    userDetails.push({
                        "publishers": res[i].publishers[0],
                        "key": res[i].key,
                        "data": string,
                        "confirmations": res[i].confirmations,
                        "blocktime": res[i].blocktime,
                        "txid": res[i].txid,
                    });
                }

                return resolve({
                    response: userDetails
                });

            } else {
                console.log(err)
            }
        })

    })
}
module.exports = {
    getscore: getscore
};