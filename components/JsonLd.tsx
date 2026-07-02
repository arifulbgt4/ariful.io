type JsonLdDocument = Record<string, unknown> & {
  '@context': string;
  '@type'?: string;
};

type JsonLdProps = {
  data: JsonLdDocument | JsonLdDocument[];
};

export default function JsonLd({ data }: JsonLdProps) {
  const documents = Array.isArray(data) ? data : [data];

  return documents.map((document, index) => (
    <script
      key={`${document['@type'] ?? 'schema'}-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(document).replace(/</g, '\\u003c'),
      }}
    />
  ));
}
