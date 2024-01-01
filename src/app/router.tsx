import { Outlet, createBrowserRouter } from "react-router-dom";
import { Sidebar } from "src/widgets/sidebar/Sidebar";
import { ErrorPage } from "src/pages/error/Error";
import { DictionaryRoute } from "src/pages/dictionary/route";
import { TheoryRoute } from "src/pages/theory/route";
import { HomeRoute } from "src/pages/home/route";
import { DrillRoute } from "src/pages/home/item/route";

const MainLayout = () => (
  <>
    <div className="flex h-full">
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
    children: [DrillRoute('/drill/:id')],
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