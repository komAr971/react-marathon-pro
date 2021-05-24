import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoing: string) {
  const uri = Url.format(getUrlWithParamsConfig(endpoing));
  const result = await fetch(uri).then((res) => res.json());
  return result;
}

export default req;
