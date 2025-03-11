import { useState } from "react";
import { useDebugValue } from "../components/DebugShell/DebugStore";

export function DebugTest() {
	const [userState] = useState({
		name: "TestUser",
		age: 23,
		email: "test#test.com",
		phone: "1234567890",
		address: "Test Address",
		city: "Test City",
		state: "Test State",
		zip: "123456",
	});

	useDebugValue("userState", userState);

	return false;
}
