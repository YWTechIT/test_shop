import react from 'react';
import { useState } from 'react';
import productData from './practice_reduce/Data';
import Button from './practice_reduce/Buttons';
import SortContainer from './practice_reduce/SortContainer';

const App = () => {
  const [product, setProduct] = useState(productData);
  
  return(
    <div>
      <SortContainer />
      <Button product={product} setProduct={setProduct}/>
    </div>
  )
}

export default App;
