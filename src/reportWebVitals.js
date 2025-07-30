// Report application performance metrics
const reportWebVitals = onPerfEntry => {
  // Ensure a valid function is provided
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import web-vitals and forward metrics
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the helper so it can be used elsewhere
export default reportWebVitals;
