import React from "react";
import Avatar from "../../components/Avatar";
import { Container, Header } from "../Profile/styles";

const Home = () => {
  return (
    <Container>
      <Header>
        <span>Home</span>
      </Header>

      <FormBody>
          <Avatar/>

          <Content>
            <textarea/>

            <ContentFooter>
              <Icons>

              </Icons>
              

              
              
            </ContentFooter>
            
          </Content>
          
      </FormBody>
      
      
    </Container>
  );
};

export default Home;
