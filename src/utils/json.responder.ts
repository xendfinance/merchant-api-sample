  function extract_error_code(message) {
    let regExp = /\(([^)]+)\)/;
    let code = regExp.exec(message);
    return code ? code[1] : 'app_000'; // please read Documentation and understand error code A000
  }
          // this json response will be used to handle every http response leaving the API: to comply with standard
       
  export const successResponse = (response_object) => {

      const message : string = response_object.message ? response_object.message : "Action Completed(app_001)";
      const data : any = response_object.data ? response_object.data : {};
      const action : string = response_object.action ? response_object.action : null;
      const error_details : any = response_object.error_details ? response_object.error_details : null;
 

      let language_code = extract_error_code(message);
      let my_language_code = language_code === " " ? null : language_code;
      let response = {
          data: data,
          status: "success",
          status_code: 200,
          message: message.toString().replace(/ *\([^)]*\) */g, ""),
          action: action,
          error_code: null,
          message_language_code: my_language_code,
          error_details: error_details,
       };

  response_object.res.status(200).json(response);
};


export const errorResponse = (response_object) => {
  
const message : string = response_object.message ? response_object.message : "Action Failed(app_002)";
const code : number = response_object.code ? response_object.code : 417;
const data : any = response_object.data ? response_object.data : {};
const action : string = response_object.action ? response_object.action : null;
const error_code : string = response_object.error_code ? response_object.error_code : "app_002";
const error_details : any = response_object.error_details ? response_object.error_details : null;


  let language_code = extract_error_code(message);
  let my_language_code = language_code === " " ? null : language_code;
  let response = {
    data: data,
    status: "failed",
    status_code: code,
    message: message.toString().replace(/ *\([^)]*\) */g, ""),
    action: action,
    error_code: error_code, // each error is documented, the code can help the Merchant/community find solution (read documentation)
    message_language_code: my_language_code,
    error_details: error_details, // debug message for api developers
  };

  response_object.res.status(code).json(response);
};
