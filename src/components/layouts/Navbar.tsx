import { Link } from "react-router-dom";
import { useCounterStore } from "../../state-management/zustand/store";
import "./Navbar.scss";

interface Props {
  className: string;
}

const Navbar = ({ className }: Props) => {
  // FOLLOWING IS TO ISOLATE THE COUNTER SO THAT WHEN MAX IS UPDATED
  // THE NAVBAR WON'T RE-RENDER
  const counter = useCounterStore((store) => store.counter);
  return (
    <div className={`navbar ${className}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/expense"}>Expense</Link>
            </li>
            <li>
              <Link to={"/page-two"}>Mosh One</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Mosh UI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="PART ONE">
            <div className="dropdown">
              <li tabIndex={0} className="mr-5">
                Part One
              </li>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/page-two"}>Mosh One</Link>
                </li>
                <li>
                  <Link to={"/expense"}>Expense</Link>
                </li>
                <li>
                  <Link to={"/states"}>States</Link>
                </li>
                <li>
                  <Link to={"/forms"}>Forms</Link>
                </li>
                <li>
                  <Link to={"/data"}>Data Fetch</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="PART TWO">
            <ul className="dropdown">
              <li tabIndex={0} className="">
                Part Two
              </li>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/react-query"}>React Query</Link>
                </li>
                {/* <li>
                  <Link to={"/state"}>State Management</Link>
                </li>
                <li>
                  <Link to={"/states"}>States</Link>
                </li>
                <li>
                  <Link to={"/forms"}>Forms</Link>
                </li>
                <li>
                  <Link to={"/data"}>Data Fetch</Link>
                </li> */}
              </ul>
            </ul>
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        <span className="badge badge-warning mr-4">{counter}</span>
        <Link to={"/demo"} className="btn">
          Demo
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
