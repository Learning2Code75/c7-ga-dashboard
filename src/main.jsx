import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Posts from "./pages/Posts";
import Events from "./pages/Events";
import Paths from "./pages/Paths";
import Users from "./pages/Users";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import reducers from "./redux/reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/c7-ga-dashboard/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "paths",
        element: <Paths />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const persistConfig = {
  key: "persist-key",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            {/* <ReactQueryDevtools /> */}
          </ThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
