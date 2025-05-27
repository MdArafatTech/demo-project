
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import From from '../pages/Form';
import Register from '../pages/Register';
import Errorpage from '../pages/errorPage';
import Account from '../pages/Account';
import Contact from '../pages/Contact';
import HappyBirthday from '../pages/HappyBirthday';




const Routes = createBrowserRouter(
    [
        {
           path:"/",
           element:<Root></Root>,
           errorElement:<Errorpage></Errorpage>,
           children:[
            {
              path:"/register",
              element:<Register></Register>
            },
           {
            path:"/form",
            element:<From></From>
           },
          {
            path:"/account",
            element:<Account></Account>
          },
          {
            path:"/contact",
            element:<Contact></Contact>
          },
          {
            path:"/happybirthday",
            element:<HappyBirthday></HappyBirthday>
          }
           ]
        }
    ]
)

export default Routes;