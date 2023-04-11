"use strict";
//  HttpUtil will provide the support functions to create respones objects
// Success response for GET APIs
const getSuccess = (payLoad = null, message = "OK") => {
    return {
        status: 200,
        message,
        payLoad,
    };
};
const getUpdated = (message = "OK") => {
    return {
        status: 200,
        message,
    };
};
// Success response for POST APIs
const getCreated = (payLoad = null, message = "Created") => {
    return {
        status: 201,
        message,
        payLoad,
    };
};
const getBadRequest = (message = "") => {
    return {
        status: 400,
        message,
    };
};
const getException = (message = "Internal server error") => {
    return {
        status: 500,
        message,
    };
};
// Resource not found
const getNotFoundRequest = (message = "Resource not found") => {
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
