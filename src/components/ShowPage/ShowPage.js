import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSingleSeriesRequest } from '../../actions/show'

class ShowPage extends Component {

  componentDidMount() {
    const showId = this.props.match.params.id;
    this.props.getSingleSeriesRequest(showId);
  }

  render() {
    const {showInfo, isLoading, error} = this.props;

    if (isLoading) {
      return <div>Загрузка...</div>
    }
    if (error) {
      return <div>Ошибка загрузки: {error}</div>;
    }
    if (!showInfo) {
      return <div>Запись не найдена</div>;
    }

    const {name, image, summary, _embedded: {cast:actors}} = showInfo;

    return (
      <div>
        <p>{name}</p>
        <img src={image.medium} alt={name}/><br/>
        <div><p dangerouslySetInnerHTML={{__html: summary}}/></div>

        <div>
          {actors.map(({person}) => (
            <div className="t-person" key={person.id}>
              <p>{person.name}</p>
              <img src={person.image.medium} alt={person.name}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({shows}) => ({
  showInfo: shows.showInfo,
  isLoading: shows.isLoading,
  error: shows.error
});
const mapDispatchToProps = {getSingleSeriesRequest};
export default connect(mapStateToProps, mapDispatchToProps)(ShowPage)
