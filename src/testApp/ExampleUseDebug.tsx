import { useState } from "react"
import { useDebug } from "../main"

export function ExampleUseDebug() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	})

	useDebug("formData", formData)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target

		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	return (
		<form>
			<label>
				Name:
				<input type="text" name="name" value={formData.name} onChange={handleChange} />
			</label>
			<br />
			<label>
				E-Mail:
				<input
					type="text"
					name="email"
					value={formData.email}
					onChange={handleChange} // <-- Hier das "onChange"
				/>
			</label>
		</form>
	)
}
