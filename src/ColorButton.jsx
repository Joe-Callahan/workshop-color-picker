const ColorButton = ({ colorName, setSelectedColor }) => {
  return (
    <button onClick={() => setSelectedColor(colorName)}>
      {colorName}</button>
  )
}

export default ColorButton