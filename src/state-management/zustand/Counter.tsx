import { useCounterStore } from "./store";

const Counter = () => {
  const { counter, max, increment, reset, resetMax } = useCounterStore();

  return (
    <div>
      Counter <span className="badge badge-warning">{counter}</span>
      Max <span className="badge badge-info">{max}</span>
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
      <button onClick={() => resetMax()} className="btn btn-seconday mx-1">
        ResetMax
      </button>
      <h5 className="mt-5">
        The max was implemented to show when the max is updated it won't
        rerender the Navbar. See the Navbar implementation to see the usage
      </h5>
    </div>
  );
};

export default Counter;
