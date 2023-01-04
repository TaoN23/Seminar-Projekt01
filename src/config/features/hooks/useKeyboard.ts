import { useState, useMemo, useEffect, useRef, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const keys = [
    {
        key: 'KeyW',
        returnType: 'forward',
    },
    {
        key: 'KeyS',
        returnType: 'backwards',
    },
];
export function useKeyboard(): void {
    const keymap = useRef();
    const returnKeys = useRef();

    const handlekeydown = useCallback((event: any) => {
        console.log(event);
    }, []);
    useEffect(() => {
        keymap.current = Object.assign(
            {},
            ...keys.map((s) => ({ [s.key]: s.returnType }))
        );

        returnKeys.current = Object.assign(
            {},
            ...keys.map((s) => ({ [s.returnType]: 'false' }))
        );
        const keydownlistener = window.addEventListener(
            'keydown',
            handlekeydown
        );
    }, []);

    const [activeKeys, setActiveKeys] = useState(returnKeys.current);

    return activeKeys;
}
