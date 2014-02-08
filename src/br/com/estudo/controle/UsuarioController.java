package br.com.estudo.controle;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.estudo.bean.Usuario;

import com.google.gson.Gson;

@Controller
public class UsuarioController {
	
	
	@RequestMapping(UsuarioMapping.CADASTRAR_USUARIO)
	public String cadastrar(HttpServletRequest request){
		
		List<Usuario> usuarios = new ArrayList<Usuario>();
		for(int i=0; i<=10; i++){
			Usuario usuario = new Usuario();
			usuario.setNome("NOME"+i);
			usuario.setSobreNome("SOBRENOME"+i);
			usuarios.add(usuario);
		}
		
		request.setAttribute("usuarios", usuarios);
		return UsuarioMapping.CADASTRAR_USUARIO;		
	}
			
	@RequestMapping(UsuarioMapping.ALTERAR_USUARIO)
	public String alterar(){
		
		return UsuarioMapping.ALTERAR_USUARIO;
	}
	

	@RequestMapping(UsuarioMapping.SALVAR_USUARIO)
	public @ResponseBody String salvar(Usuario usuario, HttpServletRequest request){
		String retorno = "Cadastro realizado com sucesso!";
		Gson gson = new Gson();
		return gson.toJson(retorno);
	}
	
	@RequestMapping(UsuarioMapping.ATUALIZAR_USUARIO)
	public @ResponseBody String atualizar(Usuario usuario){
		String retorno = "Usuario atualizado com sucesso!";
		Gson gson = new Gson();
		return gson.toJson(retorno);
	}
	
	
}
