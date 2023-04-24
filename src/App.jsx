import { links } from './data';

import Navbar from './Navbar';

const App = () => {
  return (
    <main>
      <Navbar links={links} />
    </main>
  );
};
export default App;
