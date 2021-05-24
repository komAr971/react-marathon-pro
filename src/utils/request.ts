import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoing: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoing, query));
  const result = await fetch(uri).then((res) => res.json());
  return result;
}

export default req;
