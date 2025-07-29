import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

function AppLayOut() {
  return (
    <div className="app">
      <Provider store={appStore}>
        <Header />
          <Outlet />
      </Provider>
    </div>
  );
}

export default AppLayOut;
