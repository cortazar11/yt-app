import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onInputChange = (e) => {
    const term = e.target.value;
    this.setState({
      term,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.term(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
