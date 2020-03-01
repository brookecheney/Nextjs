import React, { Component } from 'react';
import styled from 'styled-components';

import Link from 'next/link';

const linkStyles = {
    marginRight: 15
};
const NavBarStyle = styled.nav``;

export default function Index() {
  return (
    <div>
   
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/pokemon/[number]"><a>number</a></Link>
      <p>Hello Next.js</p>
    </div>
  )
}