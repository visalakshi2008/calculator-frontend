import React, { useState } from "react";
import antd, { Button, Col, Row, Typography, Input } from "antd";

function Calculator() {
  const [inputValue, setInputValue] = useState();

  const handleResetClick = () => {
    setInputValue("");
  };
  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleEqualButton = () => {
    let result = 0;
    const operations = inputValue.split(/[-+*/%]/);
    const operators = inputValue.match(/[-+*/%]/g);

    if (operations.length > 1) {
      result = parseFloat(operations[0]);

      for (let i = 1; i < operations.length; i++) {
        switch (operators[i - 1]) {
          case "+":
            result += parseFloat(operations[i]);
            break;
          case "-":
            result -= parseFloat(operations[i]);
            break;
          case "*":
            result *= parseFloat(operations[i]);
            break;
          default:
            break;
        }
      }
    } else {
      result = inputValue;
    }

    setInputValue(result.toString());
  };
  return (
    <div>
      <Row justify="center">
        <Col>
          <Typography.Title span={24} level={24}>
            Calculator
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={4} offset={10}>
          <Input
            style={{ backgroundColor: "coral", paddingBlock: "20px" }}
            onclick="ClearFields();"
            value={inputValue}
          />
        </Col>
      </Row>
      <Row justify="center" style={{ fontWeight: "700" }}>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={handleResetClick}>C</Button>
        </Col>

        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("%")}>%</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("+/-")}> +/- </Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("/")}>/</Button>
        </Col>
      </Row>
      <Row justify="center" style={{ fontWeight: "700" }}>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("7")}>7</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("8")}>8</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("9")}>9</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("*")}>*</Button>
        </Col>
      </Row>{" "}
      <Row justify="center" style={{ fontWeight: "700" }}>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("4")}>4</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("5")}>5</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("6")}>6</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("-")}>-</Button>
        </Col>
      </Row>{" "}
      <Row justify="center" style={{ fontWeight: "700" }}>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("1")}>1</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("2")}>2</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("3")}>3</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("+")}>+</Button>
        </Col>
      </Row>{" "}
      <Row justify="center" style={{ fontWeight: "700" }}>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick(".")}>.</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          {" "}
          <Button onClick={() => handleButtonClick("0")}>0</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("</>")}>&lt;/&gt;</Button>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            paddingBlock: "12px",
          }}
        >
          <Button onClick={handleEqualButton}>=</Button>
        </Col>
      </Row>
    </div>
  );
}
export default Calculator;
