import http from "k6/http";
import { check } from "k6";

export const options = {
	vus: 1,
	duration: "3s",
};

export default function () {
	const res = http.get(__ENV.BASE_URL);

	check(res, {
		"status is 200": (r) => r.status === 200,
	});
}
