import React from 'react'
import type { LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Outlet } from '@remix-run/react'

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ success: true })
}

export default function AppLayout() {
  return (
    <div className="h-full">
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
