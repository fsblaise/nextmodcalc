"use client"

import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { createUser, updateUser } from "@/hooks/authService";
import { useState } from "react";
import Toast from "@/components/toast/toast";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [toast, setToast] = useState({type: '', msg: ''});

    return (
      <div className="w-full flex-grow-[100] flex justify-center items-center">
        <form method="post" onSubmit={(e) => submit(e,setLoading,setShowMessage,setToast)}>
            <Card className="h-[500px] w-[350px]">
            <CardHeader className="justify-center font-bold text-secondary text-2xl">Register</CardHeader>
            <CardBody>
                <Input
                type="name"
                name="name"
                variant="bordered"
                label="Username"
                labelPlacement="outside"
                className="my-4"
                ></Input>
                <Input
                type="email"
                name="email"
                variant="bordered"
                label="Email address"
                labelPlacement="outside"
                className="my-4"
                ></Input>
                <Input
                type="password"
                name="password"
                variant="bordered"
                label="Password"
                labelPlacement="outside"
                className="my-4"
                ></Input>
                <Input
                type="password"
                name="rePassword"
                variant="bordered"
                label="Confirm password"
                labelPlacement="outside"
                className="my-4"
                ></Input>
            </CardBody>
            <CardFooter className="justify-evenly">
                <Button variant="light" color="danger" type="reset">Cancel</Button>
                <Button variant="light" type="submit" isLoading={loading}>Register</Button>
            </CardFooter>
            </Card>
        </form>
        {showMessage && (<Toast type={toast.type} msg={toast.msg}></Toast>)}
      </div>
    );
}

async function submit(e: any, setLoading: any, setShowMessage: any, setMsg: any) {
  setLoading(true);
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());
  const user = await createUser(userData.email as string, userData.password as string);
  if (user != 'error') {
    updateUser({displayName: userData.name}).finally(() => {
      setLoading(false);
    });
  } else {
    setMsg({type: 'warning', msg: 'You have to fill every field!'});
    setShowMessage(true);
    setLoading(false);
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }
}