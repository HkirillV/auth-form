import Router from "@/router";
import Container from "@/components/layouts/Container";

import "./styles";

function App() {

  return (
    <Container>
      <main className="content">
        <Router />
      </main>
    </Container>
  );
}

export default App;
