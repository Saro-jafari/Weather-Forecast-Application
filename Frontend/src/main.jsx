import { QueryClient, Provider, store, QueryClientProvider, App } from './index';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const queryClient = new QueryClient();

// ایجاد ریشه برای React 18
const root = createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</Provider>
		,
	</BrowserRouter>,
);
