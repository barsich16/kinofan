import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import styles from './Exchanger.module.scss';

export const Exchanger = () => {
	const isCalculated = useRef(false);

	// const [privat, setPrivat] = useState({ eur: '', usd: '' });
	// const [ftx, setFtx] = useState(0);
	// useEffect(() => {
	// 	fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			const eur = res.find((cur) => cur.ccy === 'EUR').sale.slice(0, 5);
	// 			const usd = res.find((cur) => cur.ccy === 'USD').sale.slice(0, 5);
	// 			setPrivat({ eur, usd });
	// 		});
	// }, []);

	const [results, setResults] = useState({
		// betterCurrency: 'EUR',
		// currencyDifference: 0,
		// euroRevo: 0,
		// usdcFTX: 0,
		// uahBinance: 0,
		// uahWhiteBit: 0,
		gbp: 0,
		eur: 0,
		usdt: 0,
		amount: 0,
	});

	const calculateProfit = ({ amount, usdtToGbp, gbpToEur, eurToUsdt }) => {
		let gbp = (amount - amount * 0.00075) * usdtToGbp;
		console.log(gbp);
		let eur = (gbp - gbp * 0.005) * gbpToEur;
		console.log(eur);
		let usdt = (eur - eur * 0.00075) / eurToUsdt;
		console.log(usdt);

		// if (eurFromEur > eurFromUsd) {
		// 	betterCurrency = 'EUR';
		// 	euroRevo = eurFromEur;
		// } else {
		// 	betterCurrency = 'USD';
		// 	euroRevo = eurFromUsd;
		// }

		// const currencyDifference = Math.abs(eurFromEur - eurFromUsd).toFixed(2);
		//
		// const usdcFTX = +(euroRevo * ftx).toFixed(2);
		//
		// const uahBinance = Math.round((usdcFTX - usdcFTX * 0.01) * binance);
		// const uahWhiteBit = Math.round((usdcFTX - usdcFTX * 0.01) * whitebit);

		// return {
		// 	betterCurrency,
		// 	currencyDifference,
		// 	euroRevo,
		// 	usdcFTX,
		// 	uahBinance,
		// 	uahWhiteBit,
		// };
		return {
			gbp,
			eur,
			usdt,
			amount,
		};
	};

	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: {
			amount: '',
			usdtToGbp: '',
			gbpToEur: '',
			eurToUsdt: '',
		},
		onSubmit: (values) => {
			const result = calculateProfit(values);
			setResults(result);
			isCalculated.current = true;
		},
	});

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.inputBlock}>
				<input
					className={`input ${styles.input_black}`}
					value={values.amount}
					onChange={handleChange}
					placeholder='Стартова сума в USDT'
					id='amount'
					name='amount'
					type='text'
				/>
				<input
					className={`input ${styles.input_black}`}
					value={values.usdtToGbp}
					onChange={handleChange}
					placeholder='Курс Binance P2P (USDT/GBP)'
					id='usdtToGbp'
					name='usdtToGbp'
					type='text'
				/>
				<input
					className={`input ${styles.input_black}`}
					value={values.gbpToEur}
					onChange={handleChange}
					placeholder='Курс Revolut (GBP/EUR)'
					id='gbpToEur'
					name='gbpToEur'
					type='text'
				/>
				<input
					className={`input ${styles.input_black}`}
					value={values.eurToUsdt}
					onChange={handleChange}
					placeholder='Курс Binance P2P (EUR/USDT)'
					id='eurToUsdt'
					name='eurToUsdt'
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
					{/*<p>*/}
					{/*	Вигідніше надсилати у валюті {results.betterCurrency}, буде отримано{' '}*/}
					{/*	{results.euroRevo} {results.betterCurrency}, різниця{' '}*/}
					{/*	{results.currencyDifference} {results.betterCurrency}*/}
					{/*</p>*/}
					{/*<p>При конвертації на FTX буде отримано {results.usdcFTX} USDC</p>*/}
					{/*<p>*/}
					{/*	При продажі на Binance буде отримано {results.uahBinance} UAH,*/}
					{/*	профіт {results.uahBinance - 30000} UAH*/}
					{/*</p>*/}
					{/*<p>*/}
					{/*	При продажі на WhiteBit буде отримано {results.uahWhiteBit} UAH,*/}
					{/*	профіт {results.uahWhiteBit - 30000} UAH*/}
					{/*</p>*/}
					<p>
						Після продажі USDT за GBP буде отримано {results.gbp.toFixed(2)} на
						Revolut
					</p>
					<p>На Revolut після конвертації буде {results.eur.toFixed(2)}</p>
					<p>
						Після купівлі USDT за EUR буде отримано {results.usdt.toFixed(2)} на
						Binance
					</p>
					<p>Профіт: {(results.usdt - results.amount).toFixed(2)} usdt</p>
				</div>
				<div className={styles.rates}>
					<div className={styles.privatRate}>
						{/*<span className={styles.logo}>Приват24</span>*/}
						{/*<span className={styles.rate}>{privat.eur} € / </span>*/}

						{/*<span className={styles.rate}>{privat.usd} $</span>*/}
					</div>
				</div>
			</div>
		</form>
	);
};
