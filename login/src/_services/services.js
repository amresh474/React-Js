import { async } from "q";

//= ==========CRUD Operations=====================//

// function getAll(urls, params) {
//   let batchUrls = urls.map((url, index) => {
//     return axios.get(url[index], { headers: { ...params[index].headers } })
//   })
//   return axios
//     .all(batchUrls)
//     .then(handlebatchResponse)
//     .catch(handleError);
// }

// callback of response (returns promise)
function handlebatchResponse(response) {
  return response;
}

// function getfile(url, params) {
//   return axios
//     .get(url, { headers: { ...params.headers } })
//     .then(handleResponse)
//     .catch(handleError);
// }

// create Call
// function put(url, params) {
//   return axios
//     .put(url, params.body, {
//       headers: { ...params.headers },
//       params: { ...params.params },
//     })
//     .then(handleResponse)
//     .catch(handleError);
// }

// patch Call
// const patch=async(url, params)=> {
//   return axios
//     .patch(url, params.body, {
//       headers: { ...params.headers },
//       params: { ...params.params },
//     })
//     .then(handleResponse)
//     .catch(handleError);
// }

// update Call
// Get Call
async function get(url, data) {
  let json = "";
  try {
    const response = await fetch(url, {
      method: "GET", // or 'PUT'
      headers: data.headers
    });
    json = await response.json();
    console.log(JSON.stringify(json));

    
  } catch (error) {
    console.error("Error:", error);
  }
  return json;
}

console.log(get.json);

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: data.headers
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
    localStorage.setItem("test", JSON.stringify(json));
    var test2 = localStorage.getItem("test");
    console.log(test2);
  } catch (error) {
    console.error("Error:", error);
  }
  // try {
  //   const response = await fetch(url, {
  //     method: 'GET', // or 'PUT'
  //     // body: JSON.stringify(data), // data can be `string` or {object}!
  //     headers:data.headers
  //   });
  //   const json = await response.json();
  //   console.log( JSON.stringify(json));
  // } catch (error) {
  //   console.error('Error:', error);
  // }

  // fetch(url, {
  //   method: "post",
  //   body: JSON.stringify(data),
  //   headers: data.headers
  // })
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  //   .catch(() => this.setState({ hasErrors: true }));

  //return responseHandler(err,res)
  // const response =  fetch(url, {
  //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //   headers: {
  //     'Content-Type': 'application/json'
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },

  //   // body: JSON.stringify(data) // body data type must match "Content-Type" header
  // }).then((resp) =>{
  //   console.log(resp)
  // }).then(resp =>console.log()
  // );
  // //console.log(response);
  // return "";
  //return await response.json(); // parses JSON response into native JavaScript objects
}
// const post =  async (url, params) => {
//     const [err, response] = await fetch
//     .post(url, params.body, {
//       headers: { ...params.headers },
//       params: { ...params.params },
//     });

//     return responseHandler(err,response)

// }

// const responseHandler = (err, result) => {
//   console.log('-------API response err::', err);
//   console.log('-------API response result::', result);

//   return  { status: result.status, data: result.data };
// };

// post file
// function postFile(url, params, config) {
//   return axios
//     .post(url, params, config)
//     .then(handleResponse)
//     .catch(handleError);
// }

// Delete Call (prefixed function name with underscore because delete is a reserved word in javascript)
// function _delete(url, params) {
//   return axios
//     .delete(url, {
//       headers: { ...params.headers },
//       params: { ...params.params },
//     })
//     .then(handleResponse)
//     .catch(handleError);
// }

// // callback of response (returns promise)
// function handleResponse(response) {
//   _global.mergeSavedObj('user', { statusCode: response.status });

//   if (!validCodes(response.status)) {
//     return Promise.reject(response);
//   }
//   return response;
// }

// // callback of error
// function handleError(error) {
//   if (error.response) {
//     _global.mergeSavedObj('user', { statusCode: error.response.status });
//   }
//   return error;
// }
// const myHeaders = new Headers({
//   'Content-Type': 'text/plain',
//   'Content-Length': content.length.toString(),
//   'X-Custom-Header': 'ProcessThisImmediately'
// });
export const baseService = {
  get,
  postData
  // put,
  // post,
  // getAll,
  // patch,
  // delete: _delete,
  // getfile,
  // postFile,
};
