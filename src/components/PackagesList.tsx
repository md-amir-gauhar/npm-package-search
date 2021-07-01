import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux';

const PackagesList: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionCreators.searchPackages(input));
  };

  return (
    <div>
      <header className="header">
        <div className="header__top">
          <h4 className="header__text">natural pacifist manatees</h4>
          <div className="header__top__menu">
            <a href="https://www.npmjs.com/products">Products</a>
            <a href="https://docs.npmjs.com/">Documentation</a>
            <a href="https://npm.community/">Community</a>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header__logo__container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
              alt="npm__logo"
              className="header__logo"
            />
          </div>

          <form onSubmit={onSubmit}>
            <svg
              width="15px"
              height="15px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              aria-hidden="true">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd">
                <g id="Artboard-1" stroke="#777777" stroke-width="1.3">
                  <g id="Group">
                    <path
                      d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z"
                      id="Stroke-3"></path>
                    <path
                      d="M11.4913,11.4913 L17.8683,17.8683"
                      id="Stroke-7"></path>
                  </g>
                </g>
              </g>
            </svg>
            <input
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">search</button>
          </form>
          <div className="header__buttons">
            <button className="login">sign in</button>
            <button>sign up</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PackagesList;
