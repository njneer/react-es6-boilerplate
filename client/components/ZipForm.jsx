import React from 'react';

class ZipForm extends React.Component{
    constructor(props){

    }
    render() { return (
        <div className="zip-form">
            <form>
                <label htmlFor="zipcode">Zip Code </label>
                <input 
                    className="form-control"
                    type="input"
                    name="zipcode" />
                <button type="submit" className="btn btn-success">Get the forecast!!</button>
            </form>
        </div>
        );
    }
}
