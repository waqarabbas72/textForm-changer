import React , {useState} from 'react'

const TextForm = (props) => {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event) => {
    console.log('onChange');
    setText(event.target.value)
  }

  const [text , setText] = useState('Enter text Here!')
  return (
    <div>
        <div className="my-3 container">
            <h2>{props.heading}</h2>
            <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange} ></textarea>
           <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    </div>
  )
}

export default TextForm;
