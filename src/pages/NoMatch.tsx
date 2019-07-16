import React from 'react';

type Props = { location: { pathname: string} };

interface NoMatch {
  location: object,
}
const NoMatch: React.FC<Props> = (props) => {
  return (
    <div>
      <h3>
        No match for <code>{props.location.pathname}</code>
      </h3>
    </div>
  );
}

export default NoMatch;
