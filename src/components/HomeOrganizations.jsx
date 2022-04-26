import React, { useState } from "react";
import decor from "../assets/Decoration.svg";

export const HomeOrganizations = () => {
  const item1 = (
    <>
      <p className="item-text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <ul>
        <li>
          <div className="li-heading">
            <h2>Organizacja "Lorem 1"</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <p>Egestas, sed, tempus</p>
        </li>
        <li>
          <div className="li-heading">
            <h2>Organizacja "Lorem 2"</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <p>Egestas, sed, tempus</p>
        </li>
        <li>
          <div className="li-heading">
            <h2>Organizacja "Lorem 3"</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <p>Egestas, sed, tempus</p>
        </li>
      </ul>
      <div className="page-btns">
        <button>1</button>
        <button>2</button>
      </div>
    </>
  );
  const item2 = (
    <>
      <p className="item-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <ul>
        <li>
          <div className="li-heading">
            <h2>Organizacja “Lorem Ipsum 1”</h2>
            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
          </div>
          <p>Egestas, sed, tempus</p>
        </li>
        <li>
          <div className="li-heading">
            <h2>Organizacja “Lorem Ipsum 2”</h2>
            <p>
              Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.
            </p>
          </div>
          <p>Ut, aliquam, purus, sit, amet</p>
        </li>
        <li>
          <div className="li-heading">
            <h2>Organizacja “Lorem Ipsum 3”</h2>
            <p>Scelerisque in dictum non consectetur a erat nam.</p>
          </div>
          <p>Mi, quis, hendrerit, dolor</p>
        </li>
      </ul>
      <div className="page-btns">
        <button>1</button>
        <button>2</button>
      </div>
    </>
  );
  const item3 = (
    <>
      <p className="item-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <ul>
        <li>
          <div className="li-heading">
            <h2>Zbiórka “Lorem Ipsum 1”</h2>
            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
          </div>
          <p>Egestas, sed, tempus</p>
        </li>
        <li>
          <div className="li-heading">
            <h2>Zbiórka “Lorem Ipsum 2”</h2>
            <p>
              Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.
            </p>
          </div>
          <p>Ut, aliquam, purus, sit, amet</p>
        </li>
        <li>
          <div className="li-heading">
            <h2>Zbiórka “Lorem Ipsum 3”</h2>
            <p>Scelerisque in dictum non consectetur a erat nam.</p>
          </div>
          <p>Mi, quis, hendrerit, dolor</p>
        </li>
      </ul>
      <div className="page-btns">
        <button>1</button>
        <button>2</button>
      </div>
    </>
  );
  const [item, setItem] = useState(item1);
  return (
    <div className="home-organization" id="organizations">
      <div className="heading">
        <h2>Komu pomagamy ?</h2>
        <img src={decor} alt="decor" />
      </div>
      <div className="carusel">
        <div className="carusel-btns">
          <button
            onClick={() => {
              setItem(item1);
            }}
          >
            Fundacjom
          </button>
          <button
            onClick={() => {
              setItem(item2);
            }}
          >
            Organizacjom pozarządowym
          </button>
          <button
            onClick={() => {
              setItem(item3);
            }}
          >
            Lokalnym zbiórkom
          </button>
        </div>
        <div className="item">{item}</div>
      </div>
    </div>
  );
};
