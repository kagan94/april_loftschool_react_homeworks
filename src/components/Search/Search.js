import React, { Component } from 'react'
import { getSearchRequest } from '../../actions/search'
import ShowPreview from '../ShowPreview'
import { connect } from 'react-redux'

class Search extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = (e) => {
    this.setState({searchText: e.target.value});
  }

  onSearchClick = () => {
    const {searchText} = this.state;

    this.props.getSearchRequest(searchText);
  }

  getShowsResults() {
    const {shows, isLoading, error} = this.props;

    if (isLoading) {
      return <div>Загрузка...</div>
    }
    if (error) {
      return <div>Ошибка: {error}</div>
    }

    return (
      <div className="t-search-result">
        {shows.map((show) => (
          <ShowPreview key={show.id} image={show.image ? show.image.medium : null} name={show.name} id={show.id} summary={show.summary} />
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="sc-bxivnb kayeln">
        <input type="text" onChange={this.onSearchChange} value={this.state.searchText}/>
        <button onClick={this.onSearchClick}>Найти</button>
        {this.getShowsResults()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.search.shows,
  isLoading: state.search.isLoading,
  error: state.search.error
});
const mapDispatchToProps = {getSearchRequest};
export default connect(mapStateToProps, mapDispatchToProps)(Search)
