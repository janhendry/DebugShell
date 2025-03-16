import { useStore } from "@nanostores/react"
import { Allotment, LayoutPriority } from "allotment"
import { App as AntdApp, ConfigProvider, Spin, theme } from "antd"
import type { ThemeConfig } from "antd"
import styles from "./DebugShell.module.css"
import { KeyList } from "./KeyList"
import "allotment/dist/style.css"
import { Suspense, lazy } from "react"
import { $selectedValue } from "../../lib/subscriptions"
import { useDebug } from "../../main"
import { $debugShellStore, handleResize } from "./debugShellStore"

const CodeEditor = lazy(() => import("../CodeEditor/CodeEditor"))

const antdThemeConfig: ThemeConfig = {
	algorithm: theme.darkAlgorithm,
}

export function DebugShell() {
	const { appPanelSize } = useStore($debugShellStore)
	useDebug("aap", appPanelSize)
	const value = useStore($selectedValue)

	return (
		<ConfigProvider theme={antdThemeConfig}>
			<AntdApp className={styles.DebugShell}>
				<Allotment defaultSizes={appPanelSize} vertical={false} proportionalLayout={false} onDragEnd={handleResize("appPanel")}>
					<Allotment.Pane priority={LayoutPriority.Low} preferredSize={200}>
						<KeyList />
					</Allotment.Pane>
					<Allotment.Pane>
						<Suspense
							fallback={
								<div className={styles.spinner}>
									<Spin />
								</div>
							}
						>
							<CodeEditor code={value ?? ""} readOnly />
						</Suspense>
					</Allotment.Pane>
				</Allotment>
			</AntdApp>
		</ConfigProvider>
	)
}
