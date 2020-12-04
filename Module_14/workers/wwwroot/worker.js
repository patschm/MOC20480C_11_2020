self.addEventListener("message", messageHandler, false);

function messageHandler(evt)
{
    var msg = evt.data;
    var res = {};
    res.operation = msg.operation;
    switch (msg.operation)
    {
        case "ADD":
            {
                res.result = msg.a + msg.b;
                self.postMessage(res);
                break;
            }
        case "SUBTRACT":
            {
                res.result = msg.a - msg.b;
                self.postMessage(res);
                break;
            }
        case "MULTIPLY":
            {
                res.result = msg.a * msg.b;
                self.postMessage(res);
                break;
            }
        case "DIVIDE":
            {
                res.result = msg.a / msg.b;
                self.postMessage(res);
                break;
            }
    }
}