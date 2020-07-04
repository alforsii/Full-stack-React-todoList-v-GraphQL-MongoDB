import React from 'react';
import classnames from 'classnames';
import moment from 'moment';

export default function LaunchDetails({
  date_local,
  details,
  flight_number,
  rocket,
  success,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card-panel grey lighten-2 z-depth-3">
            <blockquote>
              <ul>
                <li>Rocket ID: {rocket} </li>
                <li>Flight number: {flight_number} </li>
                <li>Local date: {moment(date_local).format('LL')} </li>
                <li>
                  {'Success: '}
                  <span
                    className={classnames({
                      'green-text': success,
                      'red-text': !success,
                    })}
                  >
                    {success ? 'Yes' : 'No'}
                  </span>
                </li>
                <li>Details: {details} </li>
              </ul>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
