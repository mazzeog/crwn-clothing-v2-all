<<<<<<< HEAD
<<<<<<< HEAD

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
=======
import Directory from './components/directory/directory.component';
=======
import { Routes, Route } from 'react-router-dom';
>>>>>>> 10bcf06 ([nav] fix app nav)

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

<<<<<<< HEAD
  return <Directory categories={categories} />;
>>>>>>> 0e7b438 (updating our directory page with directory component and category item component)
};

=======
const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};
>>>>>>> 10bcf06 ([nav] fix app nav)

export default App;