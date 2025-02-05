import { useState } from 'react'; 
import ColorButton from './ColorButton.jsx';
import PickedColor from './PickedColor.jsx';

const App = (colorName) => {
  const [selectedColor, setSelectedColor] = useState("")

  return (
    <>
      <section id={ selectedColor }>
      <h1>Color Picker</h1>
      <ColorButton colorName="red" setSelectedColor={setSelectedColor}/>
      <ColorButton colorName="gold" setSelectedColor={setSelectedColor}/>
      <ColorButton colorName="black" setSelectedColor={setSelectedColor}/>
      { PickedColor(selectedColor) }
      </section>
    </>
  )
}

export default App