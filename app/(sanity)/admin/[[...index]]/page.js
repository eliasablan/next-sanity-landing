'use client';
import config from '../../../../sanity.config';
import { NextStudio } from 'next-sanity/studio';

const Admin = () => {
  return <NextStudio config={config} />;
};

export default Admin;
