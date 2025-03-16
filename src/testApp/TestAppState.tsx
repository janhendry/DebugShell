import { useState } from "react"
import { useDebug } from "../main"

export function AppState() {
	const [userState] = useState({
		name: "TestUser",
		age: 23,
		email: "test#test.com",
		phone: "01234567890",
		address: "Test Address",
		city: "Test City",
		state: "Test State",
		zip: "123456",
	})

	useDebug("userState", userState)

	return null
}
