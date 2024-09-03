<!-- 
for routing
      we intalled react-router-dom this command 'npm install react-router-dom'
 
  we imported
        import { RouterProvider, createBrowserRouter } from 'react-router-dom';
    
    in router we used  CreateBrowserRouter function to define path and element like this
               const router = createBrowserRouter([
                { path: "/", element: <Home />},
              ]); 

    in return of function we used routerProvider like this.
        return <RouterProvider router= {router} />
 
    
    useEffects only call when page reload
    useState is used to store value in variable   
 -->