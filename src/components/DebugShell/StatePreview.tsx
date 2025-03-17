import { useStore } from "@nanostores/react"
import { Spin } from "antd"
import { Suspense, lazy } from "react"
import { $selectedValue } from "../../lib/subscriptions"
import style from "./DebugShell.module.css"

const CodeEditor = lazy(() => import("../CodeEditor/CodeEditor"))

export function StatePreview() {
	const value = useStore($selectedValue)

	return (
		<Suspense
			fallback={
				<div className={style.spinner}>
					<Spin />
				</div>
			}
		>
			<CodeEditor code={value ?? ""} readOnly={false} />
		</Suspense>
	)
}
