import React from 'react'

interface PageParams {
    params: {
        id: string;
    }
}

export default function BillingPage({
    params: { id }
}: PageParams) {
  return (
    <h1>This is the billing page. It returns HTML. The ID is: {id}</h1>
  )
}
