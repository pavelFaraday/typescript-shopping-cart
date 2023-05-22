import { useState } from "react";
import { useQuery } from "react-query";
// @mui stuff
import Drawer from "@mui/material/Drawer";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import addShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// Styles
import { Wrapper } from "./App.styles";
// Types
export type CartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
	await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
	const { data, isLoading, error } = useQuery<CartItemType[]>(
		"products",
		getProducts
	);
	console.log(data);

	return <div className="App">start</div>;
}

export default App;
