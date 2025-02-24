// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// const CryptoNewsHeaders = {
//   "x-rapidapi-key": "da45e9b3fbmsh5652e8cfb4a5b18p188968jsna48c089c4b98",
//   "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
//   "X-BingApis-SDK": "true",
// };

// const createRequest = (url) => ({ url, headers: CryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//   reducerPath: "cryptoNewsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://bing-news-search1.p.rapidapi.com",
//   }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({ newsCategory, count }) =>
//         createRequest(
//           `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
//         ),
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;
