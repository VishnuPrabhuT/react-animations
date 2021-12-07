import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";

import Tree from "./Tree";
import data from "./data";

import BarChart from "./BarChart";

function Example() {
    const { width, height } = useViewportSize();

    return (
        <>
            <Canvas width={500} height={500}>
                <Scene />
            </Canvas>
            <Tree data={data} width={500} height={500} />
            <BarChart />
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
