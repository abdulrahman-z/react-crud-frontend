import request from "../api";
import { apiConfigs } from "../config";

const getUsers = () => {
  return request({
    url: apiConfigs.routes.getUsers,
    method: "GET",
  });
};

const addUsers = (data) => {
  return request({
    url: apiConfigs.routes.getUsers,
    method: "POST",
    data: data,
  });
};

const updateUser = (id, data) => {
  return request({
    url: apiConfigs.routes.getUsers + "/" + id,
    method: "PUT",
    data: data,
  });
};

const deleteUser = (id) => {
  return request({
    url: apiConfigs.routes.getUsers + "/" + id,
    method: "DELETE",
  });
};
export const UserService = { getUsers, addUsers, updateUser, deleteUser };
