import React, { Component } from 'react'

 class Searchbar extends Component {

handleSubmitForm(e) {
  e.preventDefault();
}

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <div className='form-row mb-3 mt-2'>
        <div className="col-12">
          <input 
          onChange={this.props.searchMovie}
          type="text" className='form-control' placeholder='Search An Agent...' />
        </div>
        </div>
      </form>
    )
  }
}
export default Searchbar;
