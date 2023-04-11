import {Request, Response} from "express"
const { v4: UUID } = require("uuid");
const HttpResponse = require("../../utils/HttpResponse");
const userDA = require("./userDA");
const { userCreateValidation, userUpdateValidation } = require("./validation");

exports.createUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await userCreateValidation(body);
    const user_id = UUID();
    const newUser = {
      ...body,
      user_id,
    };
    await userDA.createUser(newUser);
    return res.json(HttpResponse.getCreated(user_id));
  } catch (error: any) {
    console.log(error);
    return res.json(HttpResponse.getException(error.message));
  }
};

exports.getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const [result = null] = await userDA.getUserById(userId);
    if (result) {
      return res.json(HttpResponse.getSuccess(result));
    } else {
      return res.json(HttpResponse.getNotFoundRequest('User not found'));
    }
  } catch (error: any) {
    console.log(error);
    return res.json(HttpResponse.getException(error.message));
  }
};

exports.updateUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { userId } = req.params;
    await userUpdateValidation(body);
    const [result = null] = await userDA.getUserById(userId);
    if (result) {
      await userDA.updateUser(body, userId);
      return res.json(HttpResponse.getUpdated());
    } else {
      return res.json(HttpResponse.getNotFoundRequest("User not found"));
    }
  } catch (error: any) {
    console.log(error);
    return res.json(HttpResponse.getException(error.message));
  }
};

exports.deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const [result = null] = await userDA.getUserById(userId);
    if (result) {
      await userDA.deleteUser(userId);
      return res.json(HttpResponse.getUpdated());
    } else {
      return res.json(HttpResponse.getNotFoundRequest("User not found"));
    }
  } catch (error: any) {
    console.log(error);
    return res.json(HttpResponse.getException(error.message));
  }
};
