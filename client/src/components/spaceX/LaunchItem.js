import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import classnames from 'classnames';

export default function Launch({ date_local, flight_number, rocket, success }) {
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
                <li>
                  <Link to={`/launches/${flight_number}`}>Details</Link>{' '}
                </li>
              </ul>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
