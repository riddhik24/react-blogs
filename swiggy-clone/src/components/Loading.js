import React from "react";

const Loading = ({ message }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      height: "50vh",
      width: "100%",
    },
    spinner: {
      width: "40px",
      height: "40px",
      border: "4px solid #e0e0e0",
      borderTopColor: "#007bff",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite",
    },
    message: {
      marginTop: "12px",
      fontSize: "14px",
      color: "#444",
    },
  };

  return (
    <>
      {/* Keyframes included inside the component */}
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.spinner}></div>
        <p style={styles.message}>{message}</p>
      </div>
    </>
  );
};

export default Loading;
