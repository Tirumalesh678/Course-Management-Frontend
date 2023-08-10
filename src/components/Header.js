import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Header()
{
    return(
        <div>
            <Card className="bg-primary">
                <CardBody>
                <h1 className="text-center my-3">Welcome to Application</h1>
                </CardBody>
            </Card>
            
        </div>
    );
}