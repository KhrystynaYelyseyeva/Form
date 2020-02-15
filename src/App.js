import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            salary: 2000,
            about: 'I like...',
            skill: 'react',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        document.querySelector("table").style.display = "inline-block";

    }

    handleChange(e) {
        switch (e.target.name) {
            case 'name':
                //перевірка на введення чисел і не буквених символів
                if (/\W|\d/g.test(e.target.value)) {
                    e.target.value = '';
                    alert('Введіть імя коректно');
                }

                //заміняємо першу букву на велику
                let word = e.target.value.charAt(0).toUpperCase();
                word += e.target.value.slice(1);

                this.setState({[e.target.name]: word});
                break;
            case "age":
                //if(/\d\d/.test(e.target.value))
                this.setState({[e.target.name]: e.target.value});
                break;
            case "salary":
            case "about":
            case "skill":
                this.setState({[e.target.name]: e.target.value});
                break;
            default:
                return -1;
                break;
        }
    }


    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter your name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Enter your age:
                        <input type="number" name="age" value={this.state.age} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Select your salary:
                        <input type="range" min="0" max="5000" name="salary" value={this.state.salary}
                               onChange={this.handleChange}/>
                    </label>
                    <label>
                        Something about you:
                        <textarea name="about" value={this.state.about} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Select your skills:
                        <select name="skill" value={this.state.skill} onChange={this.handleChange}>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="js">JS</option>
                            <option value="react">REACT</option>
                        </select>
                    </label>
                    <input type="submit" value="Надіслати"/>
                </form>
                <table>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>name</td>
                        <td>{this.state.name}</td>
                    </tr>
                    <tr>
                        <td>age</td>
                        <td>{this.state.age}</td>
                    </tr>
                    <tr>
                        <td>salary</td>
                        <td>{this.state.salary}</td>
                    </tr>
                    <tr>
                        <td>text</td>
                        <td>{this.state.about}</td>
                    </tr>
                    <tr>
                        <td>skill</td>
                        <td>{this.state.skill}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


export default App;
