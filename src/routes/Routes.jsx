
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';


import Errorpage from '../pages/errorPage';

import HappyBirthday from '../pages/HappyBirthday';





const Routes = createBrowserRouter(
    [
        {
           path:"/",
           element:<Root></Root>,
           errorElement:<Errorpage></Errorpage>,
           children:[
            
          
          
          {
            path:"/happybirthday",
            element:<HappyBirthday></HappyBirthday>
          }
           ]
        }
    ]
)

export default Routes;