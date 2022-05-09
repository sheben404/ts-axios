import { flattenHeaders } from "../helpers/headers";
import { buildURL } from "../helpers/url";
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "../types";
import transform from "./transform";
import xhr from "./xhr";

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  throwIfCancellationRequested(config)
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transform(config.data, config.headers, config.transformRequest);
  config.headers = flattenHeaders(config.headers, config.method!)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params, paramsSerializer } = config
  return buildURL(url!, params, paramsSerializer)
}

function transformResponseData(res: AxiosResponse): any {
  res.data = transform(res.data, res.headers, res.config.transformResponse)
  return res
}

function throwIfCancellationRequested(config: AxiosRequestConfig): void {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested()
  }
}

