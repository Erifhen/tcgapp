import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles_login.css";
import * as yup from "yup";
import Axios from "axios";

function acessar_login(){
    Axios.get("http://localhost:3001/login").then((response)=>{
    console.log(response)}
)};

function Cadastro() {

    const lidar_click_cadastro = (valores) => {
        Axios.get("http://localhost:3001/cadastro", {
            email: valores.email,
            senha: valores.senha
        }).then((response)=>{
            console.log(response)}
        ) };

    const validar_cadastro = yup.object().shape({
        email: yup.string().email("Não é um email válido").required("Este campo é obrigatório!"),
        senha: yup.string().min(6, "A senha deve ter no minimo 6 caracteres").required("Este campo é obrigatório!"),
        senha_confirmacao: yup.string().oneOf([yup.ref("senha"), null], "As senhas não são iguais!")
    });

    return (
        <div class="container">
            <h2>Cadastro</h2>
            <Formik initialValues={{}} onSubmit={lidar_click_cadastro}
            validationSchema={validar_cadastro}>
                <Form className="login_formulario">

                    <div className="login_formulario_grupo">
                        <Field name="email" className="form_field" placeholder="Email" />
                        <ErrorMessage component="span" name="email" className="form_error"></ErrorMessage>
                    </div>

                    <div className="login_formulario_grupo">
                        <Field name="senha" type="password" className="form_field" placeholder="Senha" />
                        <ErrorMessage component="span" name="senha" className="form_error"></ErrorMessage>
                    </div>

                    <div className="login_formulario_grupo">
                        <Field name="senha_confirmacao" type="password" className="form_field" placeholder="Confirme a Senha" />
                        <ErrorMessage component="span" name="senha_confirmacao" className="form_error"></ErrorMessage>
                    </div>

                    <button className="botao" type="submit">Registrar</button>
                    <p>Ou</p>
                    <p>Já tem uma conta?</p> <button buttononClick={acessar_login}>Entrar</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Cadastro;
