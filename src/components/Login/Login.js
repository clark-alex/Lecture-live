import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { colors, flex, Input, Toggle } from '../../utilities/index';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginInput: '',
    };
  }

  render() {
    return (
      <LoginWrapper>
        <div>
          <h1>
            <span>W</span>
            elcome to
            <span>L</span>
            ecture <span>L</span>
            ive
          </h1>
        </div>
        <LoginBox>
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <section>
                  {on ? <InactiveTab onClick={toggle}>Teacher Login</InactiveTab> : <div>Teacher Login</div>}
                  {!on ? <InactiveTab onClick={toggle}>Student Login</InactiveTab> : <div>Student Login</div>}
                </section>
                {on ? <StudentForm /> : <TeacherForm />}
              </Fragment>
            )}
          </Toggle>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const TeacherForm = () => (
  <Form>
    <h3>Email Address</h3>
    <FormPlaceHolder input>
      <input placeholder="example@example.com" />
    </FormPlaceHolder>
    <h3>Password</h3>
    <FormPlaceHolder input>
      <input placeholder="********" />
    </FormPlaceHolder>
  </Form>
);
const StudentForm = () => (
  <Form>
    <FormPlaceHolder input>
      <input placeholder="ENTER CLASSROOM CODE" />
    </FormPlaceHolder>
    <FormPlaceHolder input>
      <input placeholder="ENTER YOUR NAME" />
    </FormPlaceHolder>
  </Form>
);

const LoginWrapper = styled.div`
  ${flex({})};
  height: 100vh;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  span {
    color: ${colors.accent};
  }
  h1 {
    font-size: 42px;
  }
`;
const LoginBox = styled.div`
  ${flex({ align: '', justify: '' })};
  width: 458px;
  height: 40vh;
  background: ${colors.white};
  border-radius: 2px;
  box-shadow: 3px 3px 16px #62626294;
    section{
        ${flex({ direction: 'row', justify: 'space-between' })}
        height: 60px;
    }
    section > div {
        ${flex({})};
        width: 100%;
        height: 100%;
    }
}
`;
const InactiveTab = styled.div`
  background: #a9abb4;
  box-shadow: inset 1px -1px 3px 0px #4f4e4e;
  color: ${colors.gray};
  cursor: pointer;
`;
const Form = styled.form`
  height: 100%;
  ${flex({})};
  input {
    margin: 10px;
  }
`;
const FormPlaceHolder = styled.div`
  ${flex({ direction: 'row', justify: 'flex-start' })};
  width: 80%;
  box-shadow: ${props => props.input && 'inset 1px -1px 3px 0px #4f4e4e'};
  border-radius: 5px;
  height: 6vh;
  input {
    border: none;
  }
`;

export default Login;
