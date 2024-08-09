import { generateFaqSchema } from "@/lib/faq-schema";
import { Faq } from "@/lib/faq-schema";

type FaqSchemaProps = {
  faqs: Faq[];
};

export default function FaqSchema({ faqs }: FaqSchemaProps) {
  const schema = generateFaqSchema(faqs);

  return (
    <section id="faq-schema-area">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
