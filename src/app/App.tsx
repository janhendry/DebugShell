import { App as AntdApp, ConfigProvider, theme } from 'antd'

import type { ThemeConfig } from 'antd'
import { DebugShell } from '../main'

const antdThemeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
}

function App() {
  return (
    <ConfigProvider theme={antdThemeConfig}>
      <AntdApp>
        <div style={{ height: '100vh' }}>
          <DebugShell />
        </div>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
