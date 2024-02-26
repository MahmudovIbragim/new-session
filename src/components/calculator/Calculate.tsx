import { useState } from "react";
import scss from "./Calulate.module.scss";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import {
  addNum,
  division,
  minus,
  multiplication,
} from "../../redux/tools/calkSlice";

const Calculate = () => {
  const value = useAppSelector((state) => state.calkulate.value);
  const dispatch = useDispatch();
  const [first, setFirst] = useState(0);

  const handleAdd = () => {
    dispatch(addNum({ valueInputs: first }));
    setFirst(0);
  };

  const minusfunc = () => {
    dispatch(minus({ valueInputs: first }));
  };
  const handleMultiplication = () => {
    dispatch(multiplication({ valueInputs: first }));
    setFirst(0);
  };
  const handleDivision = () => {
    if (first !== 0) {
      dispatch(division({ valueInputs: first }));
      setFirst(0);
    }
  };

  return (
    <div className={scss.Clalulate}>
      <div className="container">
        <div className={scss.Contant}>
          <h1>{value}</h1>
          <>
            <input
              type="number"
              value={first}
              onChange={(e) => setFirst(+e.target.value)}
            />
          </>

          <div className={scss.buttons}>
            <button onClick={handleAdd}>+</button>
            <button onClick={minusfunc}>-</button>
            <button onClick={handleMultiplication}>*</button>
            <button onClick={handleDivision}>/</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
