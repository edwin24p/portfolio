import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'sjdu0fq6', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true, // `false` if you want fresh data
  apiVersion: '2023-01-01', // Use a specific API version
});

export default client;