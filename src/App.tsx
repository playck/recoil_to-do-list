import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { RecoilRoot } from "recoil";

import Calendar from "../src/components/Calendar";
import TodoFormModal from "../src/components/features/TodoFormModal";
import TodoStaticsModal from "./components/features/TodoStatisticsModal/Index";

const globalStyle = css`
  html,
  body {
    background-color: #19181a;
    margin: 0;
    font-family: sans-serif, serif, "Apple SD Gothic Neo";
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

const App: React.FC = () => (
  <RecoilRoot>
    <Global styles={globalStyle} />
    <Container>
      {/** Calendar */}
      <Calendar />
    </Container>
    {/** Modal */}
    <TodoFormModal />
    <TodoStaticsModal />
  </RecoilRoot>
);

export default App;
