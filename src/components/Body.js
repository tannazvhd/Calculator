import React, { useState, useEffect } from "react";

import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";

export default function Body(props) {
  const [resultValue, setResultValue] = useState([0]);
  const [temporValue, setTemporValue] = useState([0]);
  const [strPreview, setStrPreview] = useState("");

  const [isOperation, setIsOperation] = useState(false);
  const [isSum, setIsSum] = useState(false);
  const [isMinus, setIsMinus] = useState(false);
  const [isMulti, setIsMulti] = useState(false);
  const [isDivi, setIsDivi] = useState(false);

  function handleClick(type, value) {
    if (isOperation) {
      let length = temporValue.length;

      if (type == "num") {
        let length = temporValue.length;

        if (length >= 1) {
          if (temporValue[0] == 0) {
            setTemporValue([value]);
          } else {
            setTemporValue([...temporValue, value]);
          }
        } else {
          setTemporValue([value]);
        }
      } else {
        if (value == "del") {
          if (length > 1) {
            const copyArr = [...temporValue];
            copyArr.splice(-1);
            setTemporValue(copyArr);
          } else {
            const copyArr = [...temporValue];
            copyArr.splice(-1);
            setStrPreview("");
            setTemporValue([0]);
          }
        }
      }
    } else {
      let length = resultValue.length;

      if (type == "num") {
        if (length >= 1) {
          if (resultValue[0] == 0) {
            setResultValue([value]);
          } else {
            setResultValue([...resultValue, value]);
          }
        } else {
          setResultValue([value]);
        }
      } else if (value == "del") {
        if (length > 1) {
          const copyArr = [...resultValue];
          copyArr.splice(-1);
          setResultValue(copyArr);
        } else {
          const copyArr = [...resultValue];
          copyArr.splice(-1);
          setStrPreview("");
          setResultValue([0]);
        }
      }
    }
  }

  function handleEqual() {
    var strValue = parseFloat(resultValue.join(""));
    var strValue2 = parseFloat(temporValue.join(""));
    if (isSum) {
      let equal = strValue + strValue2;
      setIsOperation(false);
      setIsSum(false);
      setResultValue([0]);
      setTemporValue([0]);
      setStrPreview(strValue + " + " + strValue2);
      setResultValue([equal]);
    }
    if (isMinus) {
      let equal = strValue - strValue2;
      setIsOperation(false);
      setIsSum(false);
      setResultValue([0]);
      setTemporValue([0]);
      setStrPreview(strValue + " - " + strValue2);
      setResultValue([equal]);
    }
    if (isMulti) {
      let equal = strValue * strValue2;
      setIsOperation(false);
      setIsSum(false);
      setResultValue([0]);
      setTemporValue([0]);
      setStrPreview(strValue + " x " + strValue2);
      setResultValue([equal]);
    }

    if (isDivi) {
      let equal = strValue / strValue2;
      setIsOperation(false);
      setIsSum(false);
      setResultValue([0]);
      setTemporValue([0]);
      setStrPreview(strValue + " / " + strValue2);
      setResultValue([equal]);
    }
  }

  function handleClean() {
    setIsOperation(false);
    setIsSum(false);
    setIsMinus(false);
    setResultValue([0]);
    setTemporValue([0]);
    setStrPreview("");
  }

  useEffect(() => {
    if (isOperation) {
      var strValue = temporValue.join("");
      props.handleNewValue(strPreview, strValue);
    } else {
      var strValue = resultValue.join("");
      props.handleNewValue(strPreview, strValue);
    }
  }, [resultValue, temporValue]);

  return (
    <>
      <button className="miniButton">MC</button>
      <button className="miniButton">MR</button>
      <button className="miniButton">M+</button>
      <button className="miniButton">M-</button>

      <button className="button">%</button>
      <button className="button"> &#8730;</button>
      <button className="button">X&#178;</button>
      <button className="button">1/x</button>

      <button className="button" onClick={() => handleClean()}>
        CE
      </button>
      <button className="button" onClick={() => handleClean()}>
        C
      </button>
      <button className="button" onClick={() => handleClick("oper", "del")}>
        <BackspaceOutlinedIcon fontSize="xxsmall" />
      </button>
      <button
        className="button"
        onClick={() => {
          setIsOperation(true);
          setIsDivi(true);
          var strValue = resultValue.join("");
          setStrPreview(strValue + " / ");
          handleClick("oper", "divi");
        }}
      >
        &#247;
      </button>

      <button
        className="button button2"
        onClick={() => handleClick("num", "7")}
      >
        7
      </button>
      <button
        className="button button2"
        onClick={() => handleClick("num", "8")}
      >
        8
      </button>
      <button
        className="button button2"
        onClick={() => handleClick("num", "9")}
      >
        9
      </button>
      <button
        className="button"
        onClick={() => {
          setIsOperation(true);
          setIsMulti(true);
          var strValue = resultValue.join("");
          setStrPreview(strValue + " x ");
          handleClick("oper", "multi");
        }}
      >
        X
      </button>

      <button
        className="button button2"
        onClick={() => handleClick("num", "4")}
      >
        4
      </button>
      <button
        className="button button2"
        onClick={() => handleClick("num", "5")}
      >
        5
      </button>
      <button
        className="button button2"
        onClick={() => handleClick("num", "6")}
      >
        6
      </button>
      <button
        className="button"
        onClick={() => {
          setIsOperation(true);
          setIsMinus(true);
          var strValue = resultValue.join("");
          setStrPreview(strValue + " - ");
          handleClick("oper", "minus");
        }}
      >
        -
      </button>

      <button
        className="button button2"
        onClick={() => handleClick("num", "1")}
      >
        1
      </button>
      <button
        className="button button2"
        onClick={() => handleClick("num", "2")}
      >
        2
      </button>
      <button
        className="button button2"
        onClick={() => handleClick("num", "3")}
      >
        3
      </button>
      <button
        className="button"
        onClick={() => {
          setIsOperation(true);
          setIsSum(true);
          var strValue = resultValue.join("");
          setStrPreview(strValue + " + ");
          handleClick("oper", "plus");
        }}
      >
        +
      </button>

      <button className="button">+/-</button>
      <button
        className="button button2"
        onClick={() => handleClick("num", "0")}
      >
        0
      </button>
      <button className="button" onClick={() => handleClick("num", ".")}>
        .
      </button>
      <button
        className="button"
        onClick={() => {
          handleEqual();
        }}
      >
        =
      </button>
    </>
  );
}
