import type { AppProps } from 'next/app';
import Providers from 'providers';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<Providers>
		<Component {...pageProps} />;
	</Providers>
);

export default MyApp;
