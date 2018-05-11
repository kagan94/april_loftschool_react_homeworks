import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const ShowHeaderPreview = styled.div`
//   height: 150px;
// `;


class ShowPreview extends Component {
  render() {
    const {id, name, image, summary} = this.props;

    return (
      <div className="t-preview">
        {/*<ShowHeaderPreview>*/}
        <Link to={`/shows/${id}`} className="t-link"><h3>{name}</h3></Link>
        {image ? <img src={image} alt={name}/> : null}
        {/*</ShowHeaderPreview>*/}

        <div>
          <p dangerouslySetInnerHTML={{__html: summary}}/>
        </div>
      </div>
    );
  }
}

export default ShowPreview;
