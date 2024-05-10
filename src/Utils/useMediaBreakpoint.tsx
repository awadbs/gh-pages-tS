import { useCallback, useEffect, useState } from 'react'
const isBrowser = (): boolean => {
    return typeof window !== 'undefined';
  };
function useMedia<T>(queries: string[], values: T[], defaultValue: T): T {
  const match = useCallback(() => {
    let retVal = defaultValue
    if (process.env.NODE_ENV !== 'test') {
      retVal = isBrowser()
        ? values[queries.findIndex(q => window.matchMedia(q).matches)] ||
          defaultValue
        : defaultValue
    }

    return retVal
  }, [defaultValue, queries, values])
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    if (process.env.NODE_ENV !== 'test') {
        isBrowser() && window.addEventListener('resize', handler)
    }
    return () => {
      if (process.env.NODE_ENV !== 'test') {
        isBrowser() && window.removeEventListener('resize', handler)
      }
    }
  }, [match])
  return value
}

// export const useTrueAtMediaBreakpointLessThen = (screenWidth: string): boolean => {
export const useTrueAtMediaBreakpointLessThen = (screenWidth: string): boolean => {  // change here to make re-usable.
  const mediaBreakpoint = `screen and (max-width: ${screenWidth})`
  return useMedia([mediaBreakpoint], [true], false)
}

