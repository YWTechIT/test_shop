import React from 'react';

const Button = ({ product, setProduct }) => {
	const sorting = (type) => {
		if (type === 'name') {
			let newProduct = [...product];
			newProduct.sort(function (a, b) {
				return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
			});
			setProduct(newProduct);
		} else if (type === 'desc') {
			let newProduct = [...product];
			newProduct.sort(function (a, b) {
				return a.price - b.price;
			});
			setProduct(newProduct);
		} else if (type === 'asc') {
			let newProduct = [...product];
			newProduct.sort(function (a, b) {
				return b.price - a.price;
			});
			setProduct(newProduct);
		} else if (type === 'origin') {
			setProduct(product);
		}
	};

	const titleList = product.map((name) => (
		<li key={name.title}>{name.title}</li>
	));

	return (
		<>
			<button onClick={() => {sorting('name')}}>상품명</button>
			<button onClick={() => {sorting('desc')}}>낮은 가격 순</button>
			<button>낮은 가격 순</button>

			<h1>
				<ul>{titleList}</ul>
			</h1>
		</>
	);
};

export default Button;
