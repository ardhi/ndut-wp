module.exports = async function () {
  const { _, getNdutConfig } = this.ndut.helper
  const cfg = getNdutConfig('wp')
  let remote = _.get(cfg, 'restProxy.remote')
  if (remote) {
    if (_.isPlainObject(remote)) remote = [remote]
  }
  return {
    type: 'ndutRestProxy',
    swaggerTags: 'WordPress',
    remoteTag: 'category',
    remote
  }
}
