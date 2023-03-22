import MainContainer from "components/containers/MainContainer";
import SideContainer from "components/containers/SideContainer";
import ViewContainer from "components/containers/ViewContainer";
import ListCollection from "components/ListCollection";
import styled from "styled-components";
import TweetArea from "components/TweetArea";
import Header from "components/Header";
import PopularCollection from "components/containers/PopularContainer";
import { NavBar } from "components/NavBar";

const H1 = styled.h1`
  width: 48px;
  height: 26px;
  top: 24px;
  font-weight: 700;
  font-size: 24px;
`;

function MainPage() {
  return (
    <div className="d-flex">
      <NavBar />
      <MainContainer>
        <ViewContainer>
          <Header>
            <H1>首頁</H1>
          </Header>
          <TweetArea />
          <ListCollection></ListCollection>
        </ViewContainer>
        <SideContainer>
          <PopularCollection />
        </SideContainer>
      </MainContainer>
    </div>
  );
}

export default MainPage;
