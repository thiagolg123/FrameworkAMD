package br.com.estudo.tags;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

public class TableTagHandler extends BodyTagSupport {

	private static final long serialVersionUID = 1L;
	private JspWriter out;
	private List<Object> listaBeans = new ArrayList<Object>();
	private List<TableTagHandler.Coluna> colunas;
	private List<String> labelColunas;

	public int doStartTag() throws JspException {
		out = pageContext.getOut();
		colunas = new ArrayList<TableTagHandler.Coluna>();
		labelColunas = new ArrayList<String>();
		return EVAL_BODY_BUFFERED;
	}
	
	
	@Override
	public int doEndTag() throws JspException {
		try {
			out.print("<table class='table table-condensed'>");
			for(String label: labelColunas){
				out.print("<th>");
				out.print(label);
				out.print("</th>");
			}
			for(Object object: getListaBeans()){
				out.print("<tr>");
				
				for(TableTagHandler.Coluna coluna : colunas){
					
					
					Method metodo = object.getClass().getDeclaredMethod("get"+Character.toUpperCase(coluna.getValue().charAt(0)) + coluna.getValue().substring(1));
						String valor = (String) metodo.invoke(object, new Object[0]);
						out.print("<td>");
						out.print(valor);
						out.print("</td>");
				
				}
				
				out.print("</tr>");
			}
			out.print("</table>");
		}catch(Exception e){
			e.printStackTrace();
		}

		return EVAL_PAGE;
	}
	
	public void addColuna(Coluna coluna){
		this.colunas.add(coluna);
	}

	public List<Object> getListaBeans() {
		return listaBeans;
	}
	
	public void addLabelColunas(String linha){
		labelColunas.add(linha);
	}
	
	public void setListaBeans(List<Object> listaBeans) {
		this.listaBeans = listaBeans;
	}

	public static class Coluna{
		private String value;

		public String getValue() {
			return value;
		}

		public void setValue(String value) {
			this.value = value;
			
		}
	}
} 