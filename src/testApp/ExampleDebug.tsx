import { debug } from "../main"

export function ExampleDebug() {
	const handleClick = () => {
		debug("onClickEvent", new Date().toISOString())
	}

	return (
		<button type="button" onClick={handleClick}>
			Click Me
		</button>
	)
}
