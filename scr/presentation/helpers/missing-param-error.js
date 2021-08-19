module.exports = class HttpResponse {
  static badRequest (paramsName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramsName)
    }
  }
}
