import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index';
// import { GlobalContext } from './context/index'; // Uncomment jika menggunakan context

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <GlobalContext.Provider value={user}> */}
        <RouterProvider router={router} />
      {/* </GlobalContext.Provider> */}
    </div>
  );
}

export default App;