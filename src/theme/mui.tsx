import { CacheProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material";
import React from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";

const cache = createCache({
	key: process.env.REACT_APP_TEMPLATE_LOADER_KEY || "amr",
	prepend: true,
	speedy: true,
	stylisPlugins: [prefixer, rtlPlugin],
});

const MuiProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<StyledEngineProvider injectFirst>
			<CacheProvider value={cache}>{children}</CacheProvider>
		</StyledEngineProvider>
	);
};

export default MuiProvider;
