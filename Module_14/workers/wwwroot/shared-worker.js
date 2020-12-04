// Debug: chrome://inspect/#workers

self.onconnect = function (e) {
    var port = e.ports[0];
    port.addEventListener("message", messageHandler, false);
    port.start();


    function messageHandler(evt) {
        var msg = evt.data;
        var res = {};
        res.operation = msg.operation;
        switch (msg.operation) {
            case "MULTIPLY":
                {
                    res.result = msg.a * msg.b;
                    port.postMessage(res);
                    break;
                }
            case "DIVIDE":
                {
                    res.result = msg.a / msg.b;
                    port.postMessage(res);
                    break;
                }
        }
    }
}