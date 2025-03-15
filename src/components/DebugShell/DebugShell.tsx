import { useStore } from "@nanostores/react"
import { Allotment, LayoutPriority } from "allotment"
import { App as AntdApp, ConfigProvider, Spin, theme } from "antd"
import type { ThemeConfig } from "antd"
import style from "./DebugShell.module.css"
import { $selectedValue } from "./DebugStore"
import { KeyList } from "./KeyList"
import "allotment/dist/style.css"
import { Suspense, lazy } from "react"

const CodeEditor = lazy(() => import("../CodeEditor/CodeEditor"))

const antdThemeConfig: ThemeConfig = {
	algorithm: theme.darkAlgorithm,
}

export function DebugShell() {
	const value = useStore($selectedValue)

	return (
		<ConfigProvider theme={antdThemeConfig}>
			<AntdApp
				className={style.app}
				style={{
					height: "100%",
					width: "100%",
					flex: 1,
				}}
			>
				<Allotment vertical={false} proportionalLayout={false}>
					<Allotment.Pane priority={LayoutPriority.Low} preferredSize={200}>
						<KeyList />
					</Allotment.Pane>
					<Allotment.Pane>
						<Suspense fallback={<Spin />}>
							<CodeEditor code={value} readOnly />
						</Suspense>
					</Allotment.Pane>
				</Allotment>
			</AntdApp>
		</ConfigProvider>
	)
}
