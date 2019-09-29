import React from 'react';

const Form = ({props}) => {
    return (<form onSubmit={props.onSubmit}>
                <label>Number one</label>
                <input
                    type="number"
                    name="num_one"
                    className="input"
                    required
                    onChange={props.onChange}
                    value={props.state.num_one}
                    placeholder="Enter number one"
                />
                <label>Number two</label>
                <input
                    type="number"
                    name="num_two"
                    className="input"
                    required
                    onChange={props.onChange}
                    value={props.state.num_two}
                    placeholder="Enter number two"
                />
                <label>Operation</label>
                <select
                    type="text"
                    name="operation"
                    className="input"
                    onChange={props.onChange}
                >
                    <option value="add">ADD</option>
                    <option value="sub">SUB</option>
                    <option value="mul">MUL</option>
                    <option value="div">DIV</option>
                </select>
                <input type="submit" className="submit" value="Post"/>
          </form>);
}
export default Form;