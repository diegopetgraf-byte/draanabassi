import type { Metadata } from 'next';
import { TermsPageContent } from './TermsPageContent';

export const metadata: Metadata = {
    title: 'Termos e Condições | Dra. Ana Bassi',
    description: 'Termos e condições de uso da Dra. Ana Bassi.',
    alternates: { canonical: 'https://draanabassi.com.br/termos-e-condicoes' },
    openGraph: {
        title: 'Termos e Condições | Dra. Ana Bassi',
        description: 'Termos e condições de uso da Dra. Ana Bassi.',
        url: 'https://draanabassi.com.br/termos-e-condicoes',
        type: 'website',
    },
};

export default function TermsPage() {
    return <TermsPageContent />;
}
