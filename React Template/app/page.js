"use client";

import { useEffect, useState } from "react";
import IndexOnePage from "./index1-onepage/page";
import IndexOnePageDark from "./index1dark-onepage/page";

const THEME_KEY = "gue-theme";

const resolveTheme = () => {
	const savedTheme = localStorage.getItem(THEME_KEY);
	if (savedTheme === "light" || savedTheme === "dark") {
		return savedTheme;
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
};

const HomePage = () => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const queryTheme = params.get("theme");

		if (queryTheme === "light" || queryTheme === "dark") {
			localStorage.setItem(THEME_KEY, queryTheme);
			setTheme(queryTheme);
		} else {
			setTheme(resolveTheme());
		}

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const onSystemThemeChange = (event) => {
			const savedTheme = localStorage.getItem(THEME_KEY);
			if (savedTheme === "light" || savedTheme === "dark") {
				return;
			}

			setTheme(event.matches ? "dark" : "light");
		};

		mediaQuery.addEventListener("change", onSystemThemeChange);
		return () => {
			mediaQuery.removeEventListener("change", onSystemThemeChange);
		};
	}, []);

	if (!theme) {
		return null;
	}

	return theme === "dark" ? <IndexOnePageDark /> : <IndexOnePage />;
};

export default HomePage;
