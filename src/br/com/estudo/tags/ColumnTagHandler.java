package br.com.estudo.tags;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.BodyTagSupport;

public class ColumnTagHandler extends BodyTagSupport {

	private static final long serialVersionUID = 1L;
	private String label;
	private String value;

	public int doStartTag() throws JspException {
			
		return EVAL_BODY_BUFFERED;
	}
	
	@Override
	public int doEndTag() throws JspException {
			
		TableTagHandler tableTagHandler = (TableTagHandler) findAncestorWithClass(this, TableTagHandler.class);
		
		TableTagHandler.Coluna coluna = new TableTagHandler.Coluna();
		coluna.setValue(getValue());
		
		tableTagHandler.addLabelColunas(getLabel());
		tableTagHandler.addColuna(coluna);
			
		return EVAL_PAGE;
	}
	
	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
} 