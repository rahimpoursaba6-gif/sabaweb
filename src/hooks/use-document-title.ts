import { useEffect } from 'react'

/** Keeps the document title in sync with the active page. */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}

/** Shared suffix for every page title. */
export const SITE_NAME = 'هورایزن پراپرتیز'
