import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Body from './componets/Body';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './componets/MainContainer';
import WatchPage from './componets/WatchPage';

function App() {
  const router=createBrowserRouter([
    {
      path:"/youtube_testing_github",
      element: <Body/>,
      children:[
        {
          path: "/youtube_testing_github",
        element: <MainContainer/>
        },
        {
          path: "watch",
        element: <WatchPage/>,
        }
      ],
    }
  ])
  return (
    <div className="App">
     
      <Provider basename="/youtube_testing_github" store={AppStore}>

      <Header/>
      <RouterProvider router={router}>
      {/* <Body/> */}
      
   
      </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
