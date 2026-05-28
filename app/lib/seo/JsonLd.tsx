/**
 * Inline JSON-LD script for Next.js App Router server components.
 *
 * Renders synchronously in the initial HTML — AI crawlers and Google's
 * Rich Results parser pick this up on first fetch. Do not switch to
 * `next/script` (it can defer and break extraction).
 *
 * Usage:
 *   <JsonLd data={organizationSchema()} />
 */
import { JSX } from "react";

interface JsonLdProps {
  data: object | object[];
  id?: string;
}

export function JsonLd({ data, id }: JsonLdProps): JSX.Element {
  return (
    <script
      type="application/ld+json"
      id={id}
      // The schema content is server-rendered + static — safe to inline.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
