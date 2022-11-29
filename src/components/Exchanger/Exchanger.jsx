import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import styles from './Exchanger.module.scss';

export const Exchanger = () => {
	const isCalculated = useRef(false);

	const [privat, setPrivat] = useState({ eur: '', usd: '' });
	// const [ftx, setFtx] = useState(0);
	useEffect(() => {
		fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
			.then((res) => res.json())
			.then((res) => {
				const eur = res.find((cur) => cur.ccy === 'EUR').sale.slice(0, 5);
				const usd = res.find((cur) => cur.ccy === 'USD').sale.slice(0, 5);
				setPrivat({ eur, usd });
			});
	}, []);

	const [results, setResults] = useState({
		betterCurrency: 'EUR',
		currencyDifference: 0,
		euroRevo: 0,
		usdcFTX: 0,
		uahBinance: 0,
		uahWhiteBit: 0,
	});

	const calculateProfit = ({ revo, ftx, binance, whitebit }, { eur, usd }) => {
		let betterCurrency, euroRevo;

		const eurFromEur = +(29410 / eur).toFixed(2);
		const eurFromUsd = +((29410 / usd) * Number(revo)).toFixed(2);

		if (eurFromEur > eurFromUsd) {
			betterCurrency = 'EUR';
			euroRevo = eurFromEur;
		} else {
			betterCurrency = 'USD';
			euroRevo = eurFromUsd;
		}

		const currencyDifference = Math.abs(eurFromEur - eurFromUsd).toFixed(2);

		const usdcFTX = +(euroRevo * ftx).toFixed(2);

		const uahBinance = Math.round((usdcFTX - usdcFTX * 0.01) * binance);
		const uahWhiteBit = Math.round((usdcFTX - usdcFTX * 0.01) * whitebit);

		return {
			betterCurrency,
			currencyDifference,
			euroRevo,
			usdcFTX,
			uahBinance,
			uahWhiteBit,
		};
	};

	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: {
			revo: '',
			ftx: '',
			binance: '',
			whitebit: '',
		},
		onSubmit: (values) => {
			const result = calculateProfit(values, privat);
			setResults(result);
			isCalculated.current = true;
		},
	});

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.inputBlock}>
				<input
					className={`input ${styles.input_black}`}
					value={values.revo}
					onChange={handleChange}
					placeholder='Курс Revolut (USD/EUR)'
					id='revo'
					name='revo'
					type='text'
				/>
				<input
					className={`input ${styles.input_black}`}
					value={values.ftx}
					onChange={handleChange}
					placeholder='Курс FTX (EUR/USD)'
					id='ftx'
					name='ftx'
					type='text'
				/>
				<input
					className={`input ${styles.input_black}`}
					value={values.binance}
					onChange={handleChange}
					placeholder='Курс Binance (USDT/UAH)'
					id='binance'
					name='binance'
					type='text'
				/>
				<input
					className={`input ${styles.input_black}`}
					value={values.whitebit}
					onChange={handleChange}
					placeholder='Курс WhiteBit (USDT/UAH)'
					id='whiteit'
					name='whitebit'
					type='text'
				/>
				<button type='submit' className={`button`}>
					Розрахувати
				</button>
			</div>
			<div className={styles.results}>
				<div
					className={`${styles.outputBlock} ${
						!isCalculated.current ? styles.outputBlock__hidden : ''
					}`}
				>
					<p>
						Вигідніше надсилати у валюті {results.betterCurrency}, буде отримано{' '}
						{results.euroRevo} {results.betterCurrency}, різниця{' '}
						{results.currencyDifference} {results.betterCurrency}
					</p>
					<p>При конвертації на FTX буде отримано {results.usdcFTX} USDC</p>
					<p>
						При продажі на Binance буде отримано {results.uahBinance} UAH,
						профіт {results.uahBinance - 30000} UAH
					</p>
					<p>
						При продажі на WhiteBit буде отримано {results.uahWhiteBit} UAH,
						профіт {results.uahWhiteBit - 30000} UAH
					</p>
				</div>
				<div className={styles.rates}>
					<div className={styles.privatRate}>
						<span className={styles.logo}>Приват24</span>
						<span className={styles.rate}>{privat.eur} € / </span>

						<span className={styles.rate}>{privat.usd} $</span>
					</div>
				</div>
			</div>
		</form>
	);
};
