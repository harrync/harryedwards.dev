export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = "Error";

  return (
    <>
      <div>
        <main>
          <h1>🔮 I had a look, but can't find that page</h1>

          {statusCode && <p>Error code: {statusCode}</p>}

          {/* <img src="/error.png" alt="Error"  /> */}
        </main>
      </div>
    </>
  );
};
