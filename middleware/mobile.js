export default function (context) {
  const userAgent = context.req.headers['user-agent']
  context.isMobile = /mobile/i.test(userAgent)
}
