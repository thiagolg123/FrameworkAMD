package br.com.estudo.bean;


public class Usuario implements Bean {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String nome;
	private String sobreNome;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getSobreNome() {
		return sobreNome;
	}
	public void setSobreNome(String sobreNome) {
		this.sobreNome = sobreNome;
	}
}
