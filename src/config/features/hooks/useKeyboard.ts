import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Keys } from '../../types/hookTypes';

function keyIslisted(keymap: any, key: string): string | undefined {
    return keymap[key];
}

export function useKeyboard(keys: Keys[]): any {
    console.log(keys);

    const keymap = useRef();
    const returnKeys = useRef();
    const [activeKeys, setActiveKeys] = useState(returnKeys.current);

    const handlekeydown = useCallback((event: any) => {
        const action = keyIslisted(keymap.current, event.code);
        if (action) {
            setActiveKeys((prev) => {
                /**
                 * @ts-ignore */
                return { ...prev, [action]: true };
            });
        }
    }, []);

    const handlekeyup = useCallback((event: any) => {
        const action = keyIslisted(keymap.current, event.code);
        if (action) {
            setActiveKeys((prev) => {
                /**
                 * @ts-ignore */
                return { ...prev, [action]: false };
            });
        }
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
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handlekeydown);
        window.addEventListener('keyup', handlekeyup);

        return () => {
            window.removeEventListener('keydown', handlekeydown);
            window.removeEventListener('keyup', handlekeyup);
        };
    }, [handlekeydown, handlekeyup]);

    return activeKeys;
}
