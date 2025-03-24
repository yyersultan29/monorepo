"use client";

import Image from "next/image";

import {usePhotos} from '@repo/api'
import { formatDateTime } from "@repo/utils";
import { Button, Card, Skeleton, Stack } from "@repo/ui";

export default function ProfilePage() {
  
  const {photos,isLoading,error} = usePhotos();

  if(error) {
    return <div>Ошибка</div>
  }

  return (
    <div style={{ padding: "10px" }}>
      <h1>Albums</h1>
      <Stack flexDirection="row" gap="10px" flexWrap="wrap">
        {isLoading && Array(20).fill(0).map((_,index) => (
          <Skeleton key={index} width={320} height={340} />
        ))}
        {photos.map((photo) => (
          <Card key={photo.id}>
            <h5>Author: {photo.author}</h5>
            <h6>Time: {formatDateTime(new Date().toISOString())}</h6>
            <Image 
              src={photo.download_url} 
              alt={photo.id} 
              width={300} 
              height={300}  
              layout="fixed"
              style={{ objectFit: 'cover' }}
            />
            <Button.secondary>Details</Button.secondary>
          </Card>
        ))}
      </Stack>
      <Button.primary size="l">Hello mans</Button.primary>

    
      
    </div>
  );
}
