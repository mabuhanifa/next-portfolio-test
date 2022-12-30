import { useRouter } from 'next/router';
import React from 'react';

export default function Project() {
    const {query:{id}} = useRouter();
    console.log(id);
  return (
    <div>Project {id}</div>
  )
}
