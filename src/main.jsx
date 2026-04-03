import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobile from './Components/Mobile/Mobile.jsx';
import Laptop from './Components/Laptop/Laptop.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/Posts/PostDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:'mobiles',Component:Mobile},
      {path:'laptops',Component:Laptop}
    ]
  },
  {
    path:'about',
    element:<div>About Me</div>
  },
  {
    path:'blogs',
    element:<div>All Blogs Here</div>
  },{
    path:'app',
    Component:App,
    // element:<App></App> element akare lhikle tag akare dite hobe. component akare dile just component r nam
  }, 
  {
    path:'posts',
    loader:() => fetch("https://jsonplaceholder.typicode.com/posts"),
    Component:Posts
  },
  {
    path:'posts/:postId',
    loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
    Component:PostDetails
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
