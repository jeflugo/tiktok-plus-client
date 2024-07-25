import React, { Suspense } from 'react'
type SuspenseLoaderProps = {
	children: React.ReactNode
}

export default function SuspenseLoader({ children }: SuspenseLoaderProps) {
	return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}
