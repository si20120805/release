
// pages/_app.js
import { HistoryProvider } from '../utils/useNavigationHistory';

function MyApp({ Component, pageProps }) {
  return (
    <HistoryProvider>
      <Component {...pageProps} />
    </HistoryProvider>
  );
}

export default MyApp;




// import { useRouter } from 'next/router'
// import React,{useEffect} from 'react'
// import { QueryClient, QueryClientProvider } from 'react-query';


// export default function App({ Component, pageProps }) {
//   const queryClient = new QueryClient()
//   const router = useRouter();
//   useEffect(() => {
//     router.events.on('routeChangeStart', (url, { shallow }) => {
//       console.log(`routing to ${url}`, `is shallow routing: ${shallow}`);
//       router.events.on('routeChangeComplete', (url,{ shallow }) => {
//         console.log(`completely routed to ${url}`, `is shallow routing: ${shallow}`);
//       });
//     });
//   }, []);
//   return (
//     <>
//     <QueryClientProvider client={queryClient}>
//     <Component {...pageProps} />
//     </QueryClientProvider>
//     </>
//   )
// }


// //If the component is render then the CSS property will not show in the priview when the page is render so if the component
// // will increase more then it will flicker