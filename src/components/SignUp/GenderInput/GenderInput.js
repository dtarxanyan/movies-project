import React from 'react';

class GenderInput extends React.Component {
    render() {
        return (
            <>
                <div className={'gender'}>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name={'gender'} id={'female'}/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name={'gender'} id={'male'}/>
                    <label htmlFor="custom">Custom</label>
                    <input type="radio" name={'gender'} id={'custom'}/>
                </div>
                <br/>
                <select name="pronoun" id="pronoun">
                    <option selected value="">She: 'Wish her a happy birthday'</option>
                    <option value="">He: 'Wish him a happy birthday'</option>
                    <option value="">They: 'Wish them a happy birthday'</option>
                    <option value=""></option>
                </select>
                <br/>
                <br/>
                <input type="text" placeholder={'Gender (optional)'}/>
            </>
        )
    }

}

export default GenderInput;