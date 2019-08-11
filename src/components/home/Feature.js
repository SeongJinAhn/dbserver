import React from 'react';
import Link from 'gatsby-link';

export default (props) => {
  const {
    icon,
    imageSrc,
    imageHeight,
    imageMarginBottom,
    title,
    description,
    url,
    cv
  } = props;

  return (
    <li className="m-b-lg">
      <div className="featured-list-icon text-primary">
        {icon ? (
          <span className={`icon icon-${icon}`} />
        ) : (
          <img src={imageSrc}  style={{ height: imageHeight, marginBottom: imageMarginBottom }} />
        )}
      </div>
      <p className="featured-list-icon-text m-b-0">
        <strong>{title}</strong>
      </p>
      <p className="featured-list-icon-text">
        {description} <br></br>

        {url != undefined ? <Link to={url} className="text-primary">Learn more</Link> : console.log('111')}
        {cv != undefined ? <a href={cv}>See more</a> : console.log('111')}
      </p>
    </li>
  );
};
