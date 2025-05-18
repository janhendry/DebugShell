import { useStore } from "@nanostores/react"
import { List } from "antd"

import classNames from "classnames"
import { $selectedEntry, setSelection } from "../../lib/registry"
import { $entries } from "../../lib/subscriptions"
import styles from "./KeyList.module.scss"

export function KeyList() {
	const entries = useStore($entries)
	const selectedEntry = useStore($selectedEntry)

	return (
		<div>
			<List
				dataSource={entries}
				renderItem={entry => (
					<List.Item
						className={classNames({
							[styles["list-item"]]: true,
							[styles["list-item-selected"]]: entry.key === selectedEntry?.key,
						})}
						onClick={() => setSelection(entry)}
					>
						{entry.key}
					</List.Item>
				)}
			/>
		</div>
	)
}
