exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'AAA',
      age: 88,
      email: 'ths@fas.com'
    })
  }
}