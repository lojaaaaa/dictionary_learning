import { Outlet, createBrowserRouter } from "react-router-dom";
import { Sidebar } from "../widgets/sidebar/Sidebar";
import { ErrorPage } from "../pages/error/Error";
import { DictionaryRoute } from "../pages/dictionary/route";
import { TheoryRoute } from "../pages/theory/route";
import { HomeRoute } from "../pages/home/route";

const MainLayout = () => (
  <>
    <div className="flex h-screen">
      <Sidebar />
      <main className="mx-auto min-w-[1024px] max-w-screen-2xl py-20 px-2"><Outlet/></main>
    </div>

  </>
);

export const createRouter = () => createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [HomeRoute('/')],
  },
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [DictionaryRoute('/dictionary')],
  },
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [TheoryRoute('/theory')],
  },
]);