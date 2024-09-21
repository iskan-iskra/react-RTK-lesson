import store from "@/store";
import { Provider } from "react-redux";

export const appStoreProvider = (WrappedComponent) => {
  return function WithAppStoreProvider() {
    return (
      <Provider store={store}>
        <WrappedComponent />
      </Provider>
    );
  };
};
