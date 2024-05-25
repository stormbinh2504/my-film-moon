const responseWithData = (res, statusCode, data) => {
  return res.status(statusCode).json(data);
}

const error = (res, msg) => responseWithData(res, 500, {
  status: 500,
  s: "error",
  msg: msg || "Oops! Something worng!"
});

const badrequest = (res, message) => responseWithData(res, 400, {
  status: 400,
  message
});

const ok = (res, data, msg = "") => responseWithData(res, 200, {
  status: 200,
  s: "ok",
  msg,
  d: data
});

const created = (res, data) => responseWithData(res, 201, data);

const unauthorize = (res) => responseWithData(res, 401, {
  status: 401,
  message: "Unathorized"
});

const notfound = (res) => responseWithData(res, 404, {
  status: 404,
  message: "Resource not found"
});

export default {
  error,
  badrequest,
  ok,
  created,
  unauthorize,
  notfound
};