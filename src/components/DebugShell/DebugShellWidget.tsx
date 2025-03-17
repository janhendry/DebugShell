import { Allotment, LayoutPriority } from "allotment"
import { App as AntdApp, ConfigProvider, theme } from "antd"
import type { ThemeConfig } from "antd"
import "allotment/dist/style.css"
import style from "./DebugShell.module.css"
import { KeyList } from "./KeyList"
import { StatePreview } from "./StatePreview"
import { handleResize, useLocalAppState } from "./localAppState"

const antdThemeConfig: ThemeConfig = {
	algorithm: theme.darkAlgorithm,
}

export function DebugShellWidget() {
	const { appPanelSize } = useLocalAppState()

	return (
		<ConfigProvider theme={antdThemeConfig}>
			<AntdApp className={style.DebugShellWidget}>
				<Allotment defaultSizes={appPanelSize} vertical={false} proportionalLayout={false} onDragEnd={handleResize("appPanel")}>
					<Allotment.Pane priority={LayoutPriority.Low} preferredSize={200}>
						<KeyList />
					</Allotment.Pane>
					<Allotment.Pane>
						<StatePreview />
					</Allotment.Pane>
				</Allotment>
			</AntdApp>
		</ConfigProvider>
	)
}
