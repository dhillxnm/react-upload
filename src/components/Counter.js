/*

  Passing functions as props 

  what if clicking a button in the child component changes the text in the parent component? How do we make sure 
  that the parent is aware that a button is clicked that is supposed to change its text?

  This is achieved by the parent component by passing a callback function as a 
  prop when calling a child component.
  
  
  */


  import { useState } from 'react' ;
  import Button from './Button';

  function Counter() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <section>
            <h2>Pasing functions as props</h2>
            <div className='counter'>
                <Button increment ={handleCount} />
                <input type='text' className='result' value={count} readOnly />
            </div>
        </section>
    )

  }

  export default Counter;