//  HttpUtil will provide the support functions to create respones objects

// Success response for GET APIs
const getSuccess = (payLoad: any = null, message: string = "OK") => {
  return {
    status: 200,
    message,
    payLoad,
  };
};

const getUpdated = (message: string = "OK") => {
  return {
    status: 200,
    message,
  };
};

// Success response for POST APIs
const getCreated = (payLoad: any = null, message: string = "Created") => {
  return {
    status: 201,
    message,
    payLoad,
  };
};

const getBadRequest = (message: string = "") => {
  return {
    status: 400,
    message,
  };
};

const getException = (message: string = "Internal server error") => {
  return {
    status: 500,
    message,
  };
};

// Resource not found
const getNotFoundRequest = (message: string = "Resource not found") => {
  return {
    status: 404,
    message
  };
};

module.exports = {
  getSuccess,
  getCreated,
  getUpdated,
  getBadRequest,
  getException,
  getNotFoundRequest,
};
