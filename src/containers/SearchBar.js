import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('submitting ', event);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-group">
        <input type="text"
                placeholder="Add a city"
               value={this.state.term}
               onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

export default SearchBar;