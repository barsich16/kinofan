import styles from './Pagination.module.scss';
import { useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useSelector } from 'react-redux';
import {
	FiChevronLeft,
	FiChevronRight,
	FiChevronsLeft,
	FiChevronsRight,
} from 'react-icons/fi';

export const Pagination = ({ totalPages = 1 }) => {
	const { setPage, resetPage } = useActions();
	const { page } = useSelector((state) => state.pagination);

	useEffect(() => {
		resetPage();
	}, [resetPage]);

	const changePage = (newPage) => {
		setPage(newPage);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant', //'smooth' для плавного прокруту
		});
	};

	return (
		<>
			{totalPages !== 1 && (
				<div className={styles.pagination}>
					<div className={styles.inner}>
						<button
							disabled={page === 1}
							className={styles.arrow}
							onClick={() => changePage(1)}
						>
							<FiChevronsLeft />
						</button>
						<button
							disabled={page === 1}
							className={styles.arrow}
							onClick={() => changePage(page - 1)}
						>
							<FiChevronLeft />
						</button>
						<div className={styles.pages}>
							{page} / {totalPages}
						</div>
						<button
							className={styles.arrow}
							disabled={page === totalPages}
							onClick={() => changePage(page + 1)}
						>
							<FiChevronRight />
						</button>
						<button
							className={styles.arrow}
							disabled={page === totalPages}
							onClick={() => changePage(totalPages)}
						>
							<FiChevronsRight />
						</button>
					</div>
				</div>
			)}
		</>
	);
};
