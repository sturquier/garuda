export const getHeaders = (): Headers => {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append(
    'Authorization',
    `Bearer ${process.env.EXPO_PUBLIC_API_TOKEN}`,
  );

  return headers;
};
