import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: object, id: string | number) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
    query: {
      ...query,
    },
  };
  url.pathname += `/${id}`;
  return url;
}

export default getUrlWithParamsConfig;
