import { Row, Col, Input, Form, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../utils/util"; 
import { getEncrypted } from "../utils/crypto"; 
import "../style/login.css";

export default function Login() {
  const navigate = useNavigate();

  async function authenticate(email, password) {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };
    const cryptoData = getEncrypted({ payload, permissao: 1 });
    localStorage.setItem("user", cryptoData);
  }

  async function onFinish(values) {
    try {
      await authenticate(values.email, values.password);
      navigate("/mod");
    } catch (error) {
      console.log(error);
      message.error("Invalid email or password");
    }
  }
  return (
    <div className="back">
      <Row>
        <Col className="column">
          <Form
            name="basic" onFinish={onFinish}>
            <Form.Item className="formEmail" label="E-mail" name="email">
              <Input />
            </Form.Item>
            <Form.Item
              className="formPassword"
              label="Senha"
              name="password"
            >
              <Input.Password />
            </Form.Item>
            <Form.Item className="formBotao">
              <Button className="botao" type="primary" htmlType="submit">
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
