import React from 'react';
import Layout from '../components/Layout';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/SEO';
import { UnderDevelopment } from '../components/under-development/under-development.component';

const ContactPage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        customTitle="Háblame | Gabriel Méndez C."
        customDescription="Habla con Gabriel Méndez C. acerca de cualquier tema relacionado con el desarrollo de software."
      />
      <UnderDevelopment />
    </Layout>
  );
};

export default ContactPage;