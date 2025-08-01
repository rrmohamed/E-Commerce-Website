
import { UserContextProvider } from "./Context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CardContextProvider from "./Context/CardContext";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from 'react-router-dom';
import router from "./routes/routes";
import { Offline } from "react-detect-offline";

const App = () => {


  const query = new QueryClient() ;

  return <>
    <QueryClientProvider client={query}>
      <UserContextProvider>
        <CardContextProvider>
          <RouterProvider router={router} />
            <Toaster/>
        </CardContextProvider>  
      </UserContextProvider>
    </QueryClientProvider>

    <Offline>
      <div className="bg-red-600 text-white p-5 rounded-xl text-center fixed bottom-5 left-5">
        <h2> You Are Offline , Internet corrupted </h2>
      </div>
    </Offline>
  </>
}

export default App ;