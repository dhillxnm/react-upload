/*

Data flow and props 


in React, data flows in one direction, from parent to child. this helps 
components to be simple and predictable.


In React, data flows down, and events flow up 

Props are objects that contain immutable data that is shared between parent component and child component.

*/

import Counter from './components/Counter';

function App() {
  return (
    <main >
      <div className="container">
        <Counter />
      </div>
    </main>
  );
}

export default App;
