import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles_login.css";
import * as yup from "yup";
import Axios from "axios";

function acessar_cadastro(){
    Axios.get("http://localhost:3001/cadastro").then((response)=>{
    console.log(response)}
)};

function Login() {


    const lidar_click_login = (values) => {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            senha: values.senha
        }).then((response)=>{
            console.log(response);
        });
    };
    const validar_login = yup.object().shape({
        email: yup.string().email("Não é um email válido").required("Este campo é obrigatório!"),
        senha: yup.string().min(6, "A senha deve ter no minimo 6 caracteres").required("Este campo é obrigatório!")
    });
    return (
        <div className="container">
            <h2>Login</h2>
            <Formik initialValues={{}} onSubmit={lidar_click_login}
            validationSchema={validar_login}>
                <Form className="login_formulario">
                    <div className="login_formulario_grupo">
                        <Field name="email" className="form_field" placeholder="Email" />
                        <ErrorMessage component="span" name="email" className="form_error"></ErrorMessage>
                    </div>

                    <div className="login_formulario_grupo">
                        <Field name="senha" type="password" className="form_field" placeholder="Senha" />
                        <ErrorMessage component="span" name="senha" className="form_error"></ErrorMessage>
                    </div>

                    <button className="botao" type="submit">Entrar</button>
                    <p>Ou</p>
                    <button className="botao"onClick={acessar_cadastro}> Criar Conta</button>
                </Form>
            </Formik>
        </div>

    );
}

export default Login;
