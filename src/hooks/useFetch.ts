// export const useFetch= async (url:string,method:string,param:object)=>{
//   let response = await fetch(url,{
//     method : method
//     ,body : JSON.stringify(param)
//     ,headers : {
//       'Content-type' : 'application/json'
//     }
//   })
//   .then((res) => res.json())

//   return response;
// }

const serverUrl = process.env.REACT_APP_SERVER_URL as string;

export const useFetch = {
  
  useGetFetch : async (url:string)=>{
    console.log(serverUrl);
  let response = await fetch(serverUrl+ url)
  .then((res)=> res.json())

  return response;
  }
}