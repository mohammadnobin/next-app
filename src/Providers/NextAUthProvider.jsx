'use client'
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const NextAUthProvider = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>
};

export default NextAUthProvider;