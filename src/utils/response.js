export function ok(message, data) {
	const response = {};
	response.ok = true;
	response.status = "success";
	response.message = `OK: ${message}`;
	response.status_code = 200;
	response.data = data;
	return JSON.stringify(response);
}

export function unauthorized(message) {
	const response = {};
	response.ok = false;
	response.status = "unauthorized";
	response.message = `Unauthorized: ${message}`;
	response.status_code = 401;
	return JSON.stringify(response);
}

export function error(message) {
	const response = {};
	response.ok = false;
	response.status = "bad request";
	response.message = `Bad Request: ${message}`;
	response.status_code = 400;
	return JSON.stringify(response);
}
