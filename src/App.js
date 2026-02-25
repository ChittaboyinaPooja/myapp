
function App() {

  return (
    <>
    <h1> Iam home</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/reg" element={<Reg/>}/>;
      <Route path="/h" element={<Home/>}/>;
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
