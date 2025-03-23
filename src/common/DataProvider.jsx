import { get, post } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth'
const apiName = 'baseURI'

const getSession= () => {
  return localStorage.getItem('sessionid')
}

const buildAuth = async () => {
  const authToken = (await fetchAuthSession()).tokens?.idToken?.toString();
  return {Authorization: authToken}
}

export const postAPI = async (method, data) => {
    console.log('METHOD:', method)
    try {
      const restOp = post({
        apiName: apiName,
        path: `${method}?session=${getSession()}`,
        options: {
          headers: await buildAuth(),
          body: JSON.stringify(data)
        }
      })
      const res = await restOp.response
      return await res.body.json()
    }
    catch (err) {
      console.log(method, ' failed: ', err)
    }
  }

  export const getAPI = async (method) => {
    console.log('METHOD:', method)
    try {
      const restOp = get({
        apiName: apiName,
        path: method,
        options: {
          headers: await buildAuth()
        }
      })
      const res = await restOp.response
      return await res.body.json()
    }
    catch (err) {
      console.log(method, ' failed: ', err)
    }
  }