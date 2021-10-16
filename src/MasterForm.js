import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter
} from "reactstrap";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

// import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";


export default function MasterForm() {

    return (
        <div>
            <Card>
                <CardHeader>Sustainable IQ</CardHeader>
                <CardBody>
                    <CardTitle>
                        <MultiStepProgressBar />
                    </CardTitle>
                    <CardText />
                    <Step1 />
                    <Step2 />
                    <Step3 />
                    <Step4 />
                </CardBody>
                <CardFooter />
            </Card>
        </div>
    )
}
