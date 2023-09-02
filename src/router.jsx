import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home"
import RootLayout from "./screens/RootLayout";
import CreateItem from "./screens/items/CreateItem";
import ListItems from "./screens/items/ListItems";
import ShowItem from "./screens/items/ShowItem";
import UpdateItem from "./screens/items/UpdateItem";
import ItemsLayout from "./screens/items/Layout";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    {index: true, element: <Home />},
    {
      path: "items",
      element: <ItemsLayout />,
      children: [
        {index: true, element: <ListItems />},
        {path: "new", element: <CreateItem />},
        {path: ":id", element: <ShowItem />},
        {path: ":id/update", element: <UpdateItem />},
      ]
    }
  ]
}])

export default router