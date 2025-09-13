import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import vueHook from 'alova/vue';

export const alovaInstance = createAlova({
  requestAdapter: adapterFetch(),
  statesHook: vueHook,
  // 设置为null即可全局关闭全部请求缓存
  cacheFor: null,
  beforeRequest(method) {
    // 在请求发送之前做一些事情，比如添加token到请求头
    const token = ''
    method.config.headers.Authorized = `Bearer ${token}`;
  },
  async responded(response) {
    const {statusCode, data, message} = await response.json()
    if (statusCode !== 200) {
      throw new Error(message)
    }
    return data
  }
});
