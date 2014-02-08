package br.com.estudo.controle;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@RequestMapping(IndexMapping.MAIN)
	public String main(){
		return IndexMapping.MAIN;
	}
	
	@RequestMapping(IndexMapping.HOME)
	public String home(){
		return IndexMapping.HOME;
	}
	
	@RequestMapping(IndexMapping.LOGIN)
	public String login(){
		return IndexMapping.LOGIN;
	}
}
