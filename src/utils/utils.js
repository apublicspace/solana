function response(data) {
	if (data) {
		if (data.includes("Unauthorized: ")) {
			return unauthorized(data.replace("Unauthorized: ", ""));
		}
		if (data.includes("Error: ")) {
			return error(data.replace("Error: ", ""));
		}
		return ok(data);
	}
}

function ok(data) {
	const response = {};
	response.ok = true;
	response.status = "success";
	response.message = "OK: successful execution";
	response.status_code = 200;
	response.data = data;
	return JSON.stringify(response);
}

function unauthorized(message) {
	const response = {};
	response.ok = false;
	response.status = "unauthorized";
	response.message = `Unauthorized: ${message}`;
	response.status_code = 401;
	return JSON.stringify(response);
}

function error(message) {
	const response = {};
	response.ok = false;
	response.status = "bad request";
	response.message = `Bad Request: ${message}`;
	response.status_code = 400;
	return JSON.stringify(response);
}

module.exports = { response };
