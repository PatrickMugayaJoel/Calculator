import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Form from "../components/Form";
import axios from 'axios';

const MakePost = postData => {
    return axios.post("http://api.mathjs.org/v4/", postData)
        .then(resp => {
          toast.error("Success");
        })
        .catch(e => {
          toast.error("Error!");
        });
}

export class SidePen extends Component {
    constructor (props) {
      super(props);
      this.state = {
        num_one: "",
        num_two: "",
        operation: "add"
      };
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        let operator = "";
        switch (this.state.operation) {
          case "add":
            operator = "+";
            break;
          case "sub":
            operator = "-";
            break;
          case "mul":
            operator = "*";  
            break;        
          case "div":
            operator = "/";
            break;
          default:
              operator = "+";
        }

        const postData = { 
            expr: `${this.state.num_one} ${operator} ${this.state.num_two}`, 
            precision: 14 
        };

        MakePost(postData);
    }

    render () {
        const props = {
            onSubmit: this.onSubmit,
            onChange: this.onChange,
            state: this.state
        };
        return (
          <div className="col-md-4">
            <div className="side-pannel full-height">
              <span className="title">Numbers</span>
              <div className="form">
                <Form props={props} />
              </div>
            </div>
          </div>
        );
    }
}

export default SidePen;