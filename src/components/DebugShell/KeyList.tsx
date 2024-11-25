import { useStore } from '@nanostores/react'
import { $debugStoreKeys, $selectedKey, DebugStoreActions } from './DebugStore'
import { List } from 'antd'

import styles from './KeyList.module.scss'
import classNames from 'classnames'

export function KeyList() {
  const debugStoreKeys = useStore($debugStoreKeys)
  const selectedKey = useStore($selectedKey)

  return (
    <div>
      <List
        dataSource={debugStoreKeys}
        renderItem={(key) => (
          <List.Item
            className={classNames({
              [styles['list-item']]: true,
              [styles['list-item-selected']]: key === selectedKey,
            })}
            onClick={() => DebugStoreActions.setSelectedKey(key)}
          >
            {key}
          </List.Item>
        )}
      />
    </div>
  )
}
