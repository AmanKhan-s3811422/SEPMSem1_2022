import React, {useState} from 'react';

const LetterBox = id => {
    const initialState =
        {
            id: id,
            colour: 0,
            char: ''
        }
    const [letterBox, setLetterBox] = useState(initialState)

    const handleChangeInput = (e) => {
        const {name, value} = e.target
        setLetterBox({...letterBox, [name]: value})
    }

    return (
        <div className={'letter-box'}>
            <input type="text" id={'letterBox'} name={'letterBox'} maxLength={1} size={1}
                   value={letterBox.char} onChange={handleChangeInput}/>
        </div>
    );
};

export default LetterBox;
