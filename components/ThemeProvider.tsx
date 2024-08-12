'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

export function ThemeProvider({ children, ...props }: Props) {
    return <NextThemesProvider {...props} > { children } </NextThemesProvider>
}