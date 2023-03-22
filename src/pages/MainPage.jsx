import MainContainer from "components/containers/MainContainer";
import NavContainer from "components/containers/NavContainer";
import SideContainer from "components/containers/SideContainer";
import ViewContainer from "components/containers/ViewContainer";
import ListCollection from "components/ListCollection";
import Logo from "components/Logo";
import LinkItem from "components/LinkItem";
import styled from "styled-components";
import TweetArea from "components/TweetArea";
import ActButton from "components/ActButton";
import Header from "components/Header";
import PopularCollection from "components/containers/PopularContainer";

const StyledLogo = styled(Logo)`
  margin: 13px 0 27px 13px;
`

const H1 = styled.h1`
  width: 48px;
  height: 26px;
  top: 24px;
  font-weight: 700;
  font-size: 24px;
`

function MainPage() {

  return (
    <div className="d-flex">
      <NavContainer className="d-flex flex-column justify-content-between">
        <StyledLogo width={'50px'} />
        <div className="mt-3">
          <LinkItem title={'首頁'} />
          <LinkItem title={'個人資料'}/>
          <LinkItem title={'設定'}/>
          <ActButton onClick={() => console.log('TweetModal')} buttonName={'推文'} />
        </div>
        <div>
          <LinkItem title={'登出'} className='active'/> 
        </div>
      </NavContainer>
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
  )
}

export default MainPage;