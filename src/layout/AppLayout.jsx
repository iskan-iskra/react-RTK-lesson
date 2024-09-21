import { AppHeader } from "@/widjets";
import { Outlet } from "react-router-dom";
import { appStoreProvider, appThemeProvider } from "@/hoc";
import "./app-layout.css";

const AppLayoutCore = () => (
  <>
    <AppHeader />
    <main>
      <Outlet />
    </main>
  </>
);

const AppLayoutWithThemeProvider = appThemeProvider(AppLayoutCore);

const AppLayoutWithStoreProvider = appStoreProvider(AppLayoutWithThemeProvider);

export const AppLayout = AppLayoutWithStoreProvider;
