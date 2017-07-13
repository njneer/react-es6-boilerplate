import React from 'react';

class ZipForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            zipcode: '90255'
        };
    }
    render() { return (
        <div className="zip-form">
            <form>
                <label htmlFor="zipcode">Zip Code </label>
                <input 
                    className="form-control"
                    type="input"
                    name="zipcode" 
                    value={this.state.zipcode} />
                <button type="submit" className="btn btn-success"> Get the forecast!!</button>
            </form>
        </div>
        );
    }
}

export default ZipForm;
