const MissingParamError = require('./missing-param-error')
module.exports = class HttpResponse {
  static badRequest (paramsName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramsName)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }
}
