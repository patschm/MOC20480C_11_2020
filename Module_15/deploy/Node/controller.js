const rndr = require('./viewResult');

exports.HomeController = class HomeController {
    index() {
        return new rndr.ViewResult("Aha");
    }
}
