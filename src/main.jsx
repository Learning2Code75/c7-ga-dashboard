import React from "react";
import ReactDOM from "react-dom/client";
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
    path: "/c7-ga-dashboard",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/c7-ga-dashboard/",
        element: <Home />,
      },
      {
        path: "/c7-ga-dashboard/contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "/c7-ga-dashboard/posts",
        element: <Posts />,
      },
      {
        path: "/c7-ga-dashboard/events",
        element: <Events />,
      },
      {
        path: "/c7-ga-dashboard/paths",
        element: <Paths />,
      },
      {
        path: "/c7-ga-dashboard/users",
        element: <Users />,
      },
    ],
  },
]);

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
          <RouterProvider router={router} />
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
