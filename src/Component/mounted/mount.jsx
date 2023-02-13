import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Useeffect from '../useEffect/useffect';
import FakeAppchat from '../useEffect/fakeAppchat';
import Counter from '../useEffect/useLayoutEffect';

Mounted.propTypes = {
    
};

// function Mounted(props) {
//     const [mounted,setMounted] = useState(false)
//     const handleClick = () => {
//         setMounted(!mounted)
//     }
//     return (
//         <div>
//             <button onClick = {handleClick}>Click</button>
//                  {mounted&&<Useeffect />}
//         </div>
//     );
// }
function Mounted(){
    const [mounted,setMounted]= useState(false);
    const handleClick = () =>{
        setMounted(!mounted)
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            {mounted&&<Counter/> }
        </div>
    )
}
export default Mounted;