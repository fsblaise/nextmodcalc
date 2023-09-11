"use client";

import { UserAuth } from "@/contexts/auth.context";
import { getById, uploadProfilePicture } from "@/hooks/authService";
import { Button } from "@nextui-org/button";
import { Card, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Profile() {
  const { user } = UserAuth();
  const [userObj, setUserObj] = useState({ photoUrl: '' } as any);
  let fileInputRef: any;

  useEffect(() => {
    if (user) {
      getById(user.uid)
        .then((ret) => setUserObj(ret))
        .catch((error) => {
          // Handle error appropriately
          console.error('Error fetching user data:', error);
        });
    }
  }, [user]);

  function handleClick() {
    fileInputRef.click();
  }

  async function upload(event: any) {
    event.preventDefault();
    const uploadRes = await uploadProfilePicture(
      event.target.files[0],
      user.uid
    );
    if (uploadRes) {
      user.photoUrl = uploadRes;
      setUserObj((prev: any) => ({ ...prev, photoUrl: uploadRes }));
    }
  }

  return (
    <div className="w-full flex-grow-[100] flex items-center justify-center gap-6">
      <Card className="w-[250px] h-[250px] items-center justify-center">
        {userObj && userObj.photoUrl ? (
          <>
            <Image
              src={userObj.photoUrl}
              alt="Profile picture"
              width={200}
              height={200}
              className="absolute z-10 w-[200px] h-[200px] hover:opacity-30 hover:z-0 hover:cursor-pointer"
              onClick={handleClick}
            ></Image>
            <span
              className="material-symbols-outlined !text-[78px]"
            >
              add_a_photo
            </span>
            <input
              type="file"
              hidden
              accept="image/*"
              ref={(fileInput) => (fileInputRef = fileInput)}
              onChange={upload}
            ></input>
          </>
        ) : (
          <>
            <span
              className="material-symbols-outlined !text-[78px] hover:cursor-pointer hover:opacity-80"
              onClick={handleClick}
            >
              add_a_photo
            </span>
            <input
              type="file"
              hidden
              accept="image/*"
              ref={(fileInput) => (fileInputRef = fileInput)}
              onChange={upload}
            ></input>
          </>
        )}
      </Card>
      <Card className="w-[600px]">
        <CardHeader>Title</CardHeader>
      </Card>
    </div>
  );
}
