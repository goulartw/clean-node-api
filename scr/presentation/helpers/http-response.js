const MissingParamError = require('./missing-param-error')
const UnauthorizedError = require('./unauthorized-error')
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

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }

  static ok () {
    return {
      statusCode: 200
    }
  }
}
