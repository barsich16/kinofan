import styles from './Tabs.module.scss';
import { useState } from 'react';

export const Tabs = ({ items, defaultActiveKey }) => {
	const [active, setActive] = useState(defaultActiveKey - 1);

	const openTab = (e) => setActive(+e.target.dataset.index);

	return (
		<div>
			<div className={styles.tab}>
				{items.map((n, i) => (
					<button
						className={`${styles.label} ${i === active ? styles.active : ''}`}
						onClick={openTab}
						data-index={i}
						key={i}
					>
						{n.title}
					</button>
				))}
			</div>
			<div className={styles.content}>
				{items[active] && items[active].children}
			</div>
		</div>
	);
};
