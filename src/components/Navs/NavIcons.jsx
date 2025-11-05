import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function NavIcons() {
  const navigate = useNavigate();
  const [lang, setlang] = useState("EN");
  function HandleLangChange(la) {
    setlang(la);
  }
  return (
    <div className="iconsdivstyle">
      <div
        className="cartstyle"
        onClick={function () {
          navigate("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="38"
          fill="currentColor"
          class="bi bi-cart2"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        </svg>
        <span className="cartnum">0</span>
      </div>
      <div
        onClick={function () {
          navigate("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="32"
          fill="currentColor"
          class="bi bi-bookmark"
          viewBox="0 0 16 16"
        >
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        </svg>
      </div>
      <div
        onClick={function () {
          navigate("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-person"
          viewBox="0 0 16 16"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
        </svg>
      </div>

      <div class="dropdown" className="endropdown">
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <div
              class="dropdown-item"
              onClick={function () {
                HandleLangChange("EN");
              }}
            >
              EN
            </div>
          </li>
          <li>
            <div
              class="dropdown-item"
              onClick={function () {
                HandleLangChange("AR");
              }}
            >
              AR
            </div>
          </li>
          <li>
            <div
              class="dropdown-item"
              onClick={function () {
                HandleLangChange("FR");
              }}
            >
              FR
            </div>
          </li>
        </ul>
        <button
          class="btn btn-secondary dropdown-toggle "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {lang}
        </button>
      </div>
    </div>
  );
}

export default NavIcons;
